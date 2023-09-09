import {now} from 'lodash';
import {FindOptionsOrder, In} from 'typeorm';
import {UserModel} from './user.model';
import {RankModel} from '../rank/rank.model';
import {UserEntity} from '../database/user.entity';
import {DEFAULT_USER_VALUES} from './user.constant';
import {UserOnlineStatus} from '@imagine-cms/types';
import {GetUser} from '../session/get-user.decorator';
import {UserRepository} from '../database/user.repository';
import {RankRepository} from '../database/rank.repository';
import {HasSession} from '../session/has-session.decorator';
import {
  BadRequestException,
  forwardRef,
  Inject,
  UnauthorizedException,
} from '@nestjs/common';
import {
  UserCreateInput,
  UserFilterManyInput,
  UserFilterOneInput,
  UserOrderBy,
  UserUpdateInput,
} from './user.input';
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';

@Resolver(() => UserModel)
export class UserResolver {
  constructor(
    private readonly userRepo: UserRepository,
    @Inject(forwardRef(() => RankRepository))
    private readonly rankRepo: RankRepository
  ) {}

  @ResolveField('email')
  @HasSession()
  email(
    @Parent() {id, email}: UserEntity,
    @GetUser() user: UserEntity
  ): string {
    this.ownsResourceOrCanManageUsers(id, user);
    return email;
  }

  @ResolveField('gameSSO')
  @HasSession()
  gameSSO(
    @Parent() {id, gameSSO}: UserEntity,
    @GetUser() user: UserEntity
  ): string {
    this.ownsResource(id, user);
    return gameSSO;
  }

  @ResolveField('ipLast')
  @HasSession()
  ipLast(
    @Parent() {id, ipLast}: UserEntity,
    @GetUser() user: UserEntity
  ): string {
    this.ownsResourceOrCanManageUsers(id, user);
    return ipLast;
  }

  @ResolveField('ipRegisteredWith')
  @HasSession()
  ipRegisteredWith(
    @Parent() {id, ipRegisteredWith}: UserEntity,
    @GetUser() user: UserEntity
  ): string {
    this.ownsResourceOrCanManageUsers(id, user);
    return ipRegisteredWith;
  }

  @ResolveField('onlineStatus')
  onlineStatus(@Parent() {onlineStatus}: UserEntity): string {
    return onlineStatus;
  }

  @ResolveField('rank', () => RankModel, {nullable: true})
  getRank(@Parent() {rankID}: UserEntity): Promise<RankModel> {
    return this.rankRepo.findOneOrFail({id: rankID});
  }

  @Query(() => UserModel)
  async user(
    @Args('filter', {type: () => UserFilterOneInput}) filter: UserFilterOneInput
  ): Promise<UserEntity> {
    if (!filter.id && !filter.username) {
      throw new BadRequestException();
    }
    return this.userRepo.findOneOrFail({
      id: filter.id,
      username: filter.username,
    });
  }

  @Query(() => [UserModel])
  users(@Args('filter') filter: UserFilterManyInput): Promise<UserEntity[]> {
    const userOrder: FindOptionsOrder<UserEntity> = {};

    if (filter.orderBy) {
      for (const orderBy of filter.orderBy) {
        if (orderBy === UserOrderBy.ID_DESC) {
          userOrder.id = 'DESC';
        }

        if (orderBy === UserOrderBy.CREDITS_ASC) {
          userOrder.credits = 'ASC';
        }

        if (orderBy === UserOrderBy.PIXELS_ASC) {
          userOrder.activityPoints = 'ASC';
        }

        if (orderBy === UserOrderBy.POINTS_ASC) {
          userOrder.vipPoints = 'ASC';
        }
      }
    }

    if (!filter.orderBy) {
      userOrder.id = 'DESC';
    }

    return this.userRepo.find({
      where: {
        id: filter.ids && In(filter.ids),
        username: filter.usernames && In(filter.usernames),
        onlineStatus: filter.online ? UserOnlineStatus.Online : undefined,
      },
      order: {
        id: 'DESC',
      },
      take: filter.limit,
    });
  }

  @Mutation(() => UserModel)
  async userCreate(
    @Args('newUser') userCreateInput: UserCreateInput
  ): Promise<UserEntity> {
    const secondsSinceEpoch = parseInt(`${now() / 1000}`);
    const newUser = await this.userRepo.create({
      ...DEFAULT_USER_VALUES,
      ...userCreateInput,
      gameSSO: '',
      accountCreatedAt: secondsSinceEpoch,
      ipLast: '', // TODO: Add support for IPs,
      ipRegisteredWith: '', // TODO: Add support for IPs
    });
    return newUser;
  }

  @Mutation(() => Boolean)
  async userUpdate(
    @Args('id') id: number,
    @Args('userChanges') userChanges: UserUpdateInput,
    @GetUser() session: UserEntity
  ) {
    this.ownsResource(id, session);
    await this.userRepo.update({id}, userChanges);
    return true;
  }

  @Mutation(() => Boolean)
  async userDelete(@Args('id') id: number, @GetUser() session: UserEntity) {
    this.ownsResource(id, session);
    await this.userRepo.delete({id});
    return true;
  }

  private ownsResource(userID: number, authenticatedUser: UserEntity) {
    if (Number(userID) !== Number(authenticatedUser.id)) {
      throw new UnauthorizedException();
    }
  }

  private ownsResourceOrCanManageUsers(
    userID: number,
    authenticatedUser: UserEntity
  ) {
    if (authenticatedUser.rank?.scopes?.manageUsers) {
      return;
    }

    this.ownsResource(userID, authenticatedUser);
  }
}
