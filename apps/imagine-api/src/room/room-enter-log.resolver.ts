import {In} from 'typeorm';
import {UserModel} from '../user/user.model';
import {RoomEnterLogModel} from './room-enter-log.model';
import {UserRepository} from '../database/user.repository';
import {Args, Parent, Query, ResolveField, Resolver} from '@nestjs/graphql';
import {RoomEnterLogRepository} from '../database/room-enter-log.repository';
import {
  RoomEnterLogFilterOneInput,
  RoomEnterLogFilterManyInput,
} from './room-enter-log.input';

@Resolver(() => RoomEnterLogModel)
export class RoomEnterLogResolver {
  constructor(
    private readonly roomEnterLogRepo: RoomEnterLogRepository,
    private readonly userRepo: UserRepository
  ) {}

  @ResolveField(() => UserModel)
  user(@Parent() roomEnterLog: RoomEnterLogModel): Promise<UserModel | null> {
    return this.userRepo.findOne({
      where: {
        id: roomEnterLog.userID,
      },
    });
  }

  @Query(() => RoomEnterLogModel)
  async roomEnterLog(
    @Args({name: 'filter', type: () => RoomEnterLogFilterOneInput})
    filter: RoomEnterLogFilterOneInput
  ): Promise<RoomEnterLogModel> {
    const matchingRoomEnterLog = await this.roomEnterLogRepo.findOneOrFail({
      id: filter.id,
    });
    return RoomEnterLogModel.fromEntity(matchingRoomEnterLog);
  }

  @Query(() => [RoomEnterLogModel])
  async roomEnterLogs(
    @Args({name: 'filter', type: () => RoomEnterLogFilterManyInput})
    filter: RoomEnterLogFilterManyInput
  ): Promise<RoomEnterLogModel[]> {
    const matchingRoomEnterLogs = await this.roomEnterLogRepo.find({
      where: {
        id: filter.ids && In(filter.ids),
        userID: filter.userIDs && In(filter.userIDs),
        roomID: filter.roomIDs && In(filter.roomIDs),
      },
      take: filter?.limit ?? 25,
    });
    return matchingRoomEnterLogs.map(RoomEnterLogModel.fromEntity);
  }
}
