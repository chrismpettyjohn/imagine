import {now} from 'lodash';
import {UserModel} from './user.model';
import {FindOptionsOrder, In} from 'typeorm';
import {RankModel} from '../rank/rank.model';
import {BadRequestException} from '@nestjs/common';
import {UserEntity} from '../database/user.entity';
import {DEFAULT_USER_VALUES} from './user.constant';
import {UserOnlineStatus} from '@imagine-cms/types';
import {GetUser} from '../session/get-user.decorator';
import {UserRepository} from '../database/user.repository';
import {RankRepository} from '../database/rank.repository';
import {HasSession} from '../session/has-session.decorator';
import {BetaCodeEntity} from '../database/beta-code.entity';
import {ConfigRepository} from '../database/config.repository';
import {BetaCodeRepository} from '../database/beta-code.repository';
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
    private readonly rankRepo: RankRepository,
    private readonly configRepo: ConfigRepository,
    private readonly betaCodeRepo: BetaCodeRepository
  ) {}

  @ResolveField(() => Boolean)
  async hasBetaCode(@Parent() {id}: UserEntity): Promise<boolean> {
    const matchingBetaCode = await this.betaCodeRepo.findOne({
      where: {
        userID: id,
      },
    });
    return !!matchingBetaCode;
  }

  @ResolveField(() => String, {nullable: true})
  @HasSession()
  async email(
    @Parent() {id, email}: UserEntity,
    @GetUser() user: UserEntity
  ): Promise<string | null> {
    const canAccess = await this.ownsResourceOrCanManageUsers(id, user);
    if (!canAccess) {
      return null;
    }
    return email ?? null;
  }

  @ResolveField(() => String, {nullable: true})
  @HasSession()
  async gameSSO(
    @Parent() {id, gameSSO}: UserEntity,
    @GetUser() user: UserEntity
  ): Promise<string | null> {
    const canAccess = await this.ownsResourceOrCanManageUsers(id, user);
    if (!canAccess) {
      return null;
    }
    return gameSSO ?? null;
  }

  @ResolveField(() => String, {nullable: true})
  @HasSession()
  async ipLast(
    @Parent() {id, ipLast}: UserEntity,
    @GetUser() user: UserEntity
  ): Promise<string | null> {
    const canAccess = await this.ownsResourceOrCanManageUsers(id, user);
    if (!canAccess) {
      return null;
    }
    return ipLast;
  }

  @ResolveField(() => String, {nullable: true})
  @HasSession()
  async ipRegistered(
    @Parent() {id, ipRegistered: ipRegisteredWith}: UserEntity,
    @GetUser() user: UserEntity
  ): Promise<string | null> {
    const canAccess = await this.ownsResourceOrCanManageUsers(id, user);
    if (!canAccess) {
      return null;
    }
    return ipRegisteredWith;
  }

  @ResolveField(() => String, {nullable: true})
  @HasSession()
  async machineAddress(
    @Parent() {id, machineAddress}: UserEntity,
    @GetUser() user: UserEntity
  ): Promise<string | null> {
    const canAccess = await this.ownsResourceOrCanManageUsers(id, user);
    if (!canAccess) {
      return null;
    }
    return machineAddress ?? null;
  }

  @ResolveField('onlineStatus')
  onlineStatus(@Parent() {onlineStatus}: UserEntity): string {
    return onlineStatus;
  }

  @ResolveField('rank', () => RankModel, {nullable: true})
  async getRank(@Parent() {rankID}: UserEntity): Promise<RankModel> {
    const matchingRank = await this.rankRepo.findOneOrFail({id: rankID});
    return RankModel.fromEntity(matchingRank);
  }

  @Query(() => Number)
  async usersOnlineCount(): Promise<number> {
    const onlineUsers: [{online_users: number}] = await this.userRepo
      .getInstance()
      .query("SELECT COUNT(*) AS online_users FROM users WHERE online = '1'");
    return onlineUsers[0].online_users;
  }

  @Query(() => UserModel)
  async user(
    @Args('filter', {nullable: true, type: () => UserFilterOneInput})
    filter: UserFilterOneInput
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
        ipLast: filter.ipLast && In(filter.ipLast),
        ipRegistered: filter.ipRegistered && In(filter.ipRegistered),
        machineAddress: filter.machineAddress && In(filter.machineAddress),
        rankID: filter.rankIDs && In(filter.rankIDs),
      },
      order: {
        id: 'DESC',
      },
      skip: filter?.skip,
      take: filter?.limit ?? 25,
    });
  }

  @Mutation(() => UserModel)
  async userCreate(
    @Args('newUser') userCreateInput: UserCreateInput
  ): Promise<UserEntity> {
    const config = await this.configRepo.findOneOrFail();

    let matchingBetaCode: BetaCodeEntity;

    if (config.betaCodesRequired) {
      matchingBetaCode = await this.betaCodeRepo.findOneOrFail({
        betaCode: userCreateInput.betaCode,
      });
    }

    const secondsSinceEpoch = parseInt(`${now() / 1000}`);
    const newUser = await this.userRepo.create({
      ...DEFAULT_USER_VALUES,
      ...userCreateInput,
      gameSSO: '',
      accountCreatedAt: secondsSinceEpoch,
      tempUser: 0,
      ipLast: '', // TODO: Add support for IPs,
      ipRegistered: '', // TODO: Add support for IPs
      machineAddress: '', // TODO: Add support for machine addresses
    });

    if (config.betaCodesRequired) {
      await this.betaCodeRepo.update(
        {id: matchingBetaCode!.id!},
        {userID: newUser.id!}
      );
    }
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

  private ownsResource(userID: number, authenticatedUser: UserEntity): Boolean {
    return Number(userID) !== Number(authenticatedUser.id);
  }

  private async ownsResourceOrCanManageUsers(
    userID: number,
    authenticatedUser: UserEntity
  ): Promise<Boolean> {
    const matchingRank = await this.rankRepo.findOne({
      where: {
        id: authenticatedUser.rankID,
      },
    });

    if (matchingRank?.scopes?.manageUsers) {
      return true;
    }

    return this.ownsResource(userID, authenticatedUser);
  }
}
