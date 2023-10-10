import { In } from 'typeorm';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { UserTradeLogModel } from './user-trade-log.model';
import { UserTradeLogRepository } from '../database/user-trade-log.repository';
import {
  UserTradeLogFilterManyInput,
  UserTradeLogFilterOneInput,
} from './user-trade-log.input';
import { match } from 'assert';

// TODO: Privacy protect
@Resolver(() => UserTradeLogModel)
export class UserTradeLogResolver {
  constructor(private readonly userTradeLogRepo: UserTradeLogRepository) { }

  @Query(() => UserTradeLogModel)
  async userTradeLog(
    @Args({ name: 'filter', type: () => UserTradeLogFilterOneInput })
    filter: UserTradeLogFilterOneInput
  ): Promise<UserTradeLogModel> {
    const matchingUserTradeLog = await this.userTradeLogRepo.findOneOrFail({
      id: filter.id,
    });
    return UserTradeLogModel.fromEntity(matchingUserTradeLog);
  }

  @Query(() => [UserTradeLogModel])
  async userTradeLogs(
    @Args({ name: 'filter', type: () => UserTradeLogFilterManyInput })
    filter: UserTradeLogFilterManyInput
  ): Promise<UserTradeLogModel> {
    const matchingUserTradeLogs = await this.userTradeLogRepo.find({
      where: {
        id: filter.ids && In(filter.ids),
        userOneID: filter.userOneIDs && In(filter.userOneIDs),
        userTwoID: filter.userTwoIDs && In(filter.userTwoIDs),
      },
      take: filter?.limit ?? 25,
    });
    return matchingUserTradeLogs.map(UserTradeLogModel.fromEntity);
  }
}
