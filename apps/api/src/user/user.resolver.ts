import {UserArgs} from './user.args';
import {UserModel} from './user.model';
import {PubSub} from 'graphql-subscriptions';
import {RankModel} from '../rank/rank.model';
import {RankEntity} from '../database/rank.entity';
import {UserEntity} from '../database/user.entity';
import {DEFAULT_USER_VALUES} from './user.constant';
import {GetUser} from '../session/get-user.decorator';
import {UserDataloaderService} from './user.dataloader';
import {SessionEntity} from '../database/session.entity';
import {UserRepository} from '../database/user.repository';
import {HasSession} from '../session/has-session.decorator';
import {RankRepository} from '../database/rank.repository';
import {UserCreateInput, UserUpdateInput} from './user.input';
import {SessionRepository} from '../database/session.repository';
import {forwardRef, Inject, UnauthorizedException} from '@nestjs/common';
import {Args, Mutation, Parent, Query, ResolveProperty, Resolver, Subscription} from '@nestjs/graphql';

const pubSub = new PubSub();

@Resolver(() => UserModel)
export class UserResolver {
  constructor(
    private readonly userRepo: UserRepository,
    @Inject(forwardRef(() => RankRepository))
    private readonly rankRepo: RankRepository,
    @Inject(forwardRef(() => SessionRepository))
    private readonly sessionRepo: SessionRepository,
    private readonly userDataloaderService: UserDataloaderService
  ) {}

  // @ResolveProperty(() => String)
  // @HasSession()
  // email(@Parent() user: UserModel, @GetUser() authenticatedUser: UserEntity): string {
  //   this.ownsResource(user.id! as any, authenticatedUser.id!);
  //   return user.email;
  // }

  // @ResolveField(() => String)
  // @HasSession()
  // gameSSO(@Parent() user: UserModel, @GetUser() authenticatedUser: UserEntity): string {
  //   this.ownsResource(user.id! as any, authenticatedUser.id!);
  //   return user.gameSSO;
  // }
  //
  // @ResolveField(() => RankModel)
  // async rank(@Parent() user: UserModel): Promise<RankEntity> {
  //   return this.rankRepo.findOneOrFail({id: user.rankID});
  // }
  //
  // @ResolveField(() => RankModel)
  // async sessions(@Parent() user: UserModel): Promise<SessionEntity[]> {
  //   // @ts-ignore
  //   return this.sessionRepo.find({userID: user.id!});
  // }

  @Query(() => UserModel)
  async user(@Args('id') id: number): Promise<UserEntity> {
    return this.userDataloaderService.loadById(id);
  }

  @Query(() => [UserModel])
  users(@Args() userArgs: UserArgs): Promise<UserEntity[]> {
    return this.userRepo.find(userArgs);
  }

  @Mutation(() => UserModel)
  async userCreate(@Args('newUser') userCreateInput: UserCreateInput): Promise<UserEntity> {
    const createdAt = new Date().toISOString();
    const newUser = await this.userRepo.create({
      ...DEFAULT_USER_VALUES,
      ...userCreateInput,
      gameSSO: '',
      accountCreatedAt: createdAt,
      ipLast: '', // TODO: Add support for IPs,
      ipRegisteredWith: '', // TODO: Add support for IPs
    });
    pubSub.publish('userCreated', {userCreated: newUser});
    return newUser;
  }

  @Subscription(() => UserModel)
  userCreated() {
    return pubSub.asyncIterator('userCreated');
  }

  @Mutation(() => Boolean)
  async userUpdate(@Args('id') id: number, @Args('userChanges') userChanges: UserUpdateInput) {
    await this.userRepo.update({id}, userChanges);
    return true;
  }

  @Mutation(() => Boolean)
  async userDelete(@Args('id') id: number) {
    const deletedUser = await this.userRepo.findOneOrFail({id});
    pubSub.publish('userDeleted', {userDeleted: deletedUser});
    await this.userRepo.delete({id});
    return true;
  }

  @Subscription(() => UserModel)
  userDeleted() {
    return pubSub.asyncIterator('userDeleted');
  }

  private ownsResource(userID: number, authenticatedUser: number) {
    console.log(userID, authenticatedUser);
    if (Number(userID) !== Number(authenticatedUser)) {
      throw new UnauthorizedException();
    }
  }
}
