import {Args, Query, Resolver} from '@nestjs/graphql';
import {RoomEnterLogModel} from './room-enter-log.model';
import {RoomEnterLogRepository} from '../database/room-enter-log.repository';
import {
  RoomEnterLogFilterOneInput,
  RoommEnterLogFilterManyInput,
} from './room-enter-log.input';
import {In} from 'typeorm';

@Resolver(() => RoomEnterLogModel)
export class RoomEnterLogResolver {
  constructor(private readonly roomEnterLogRepo: RoomEnterLogRepository) {}

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
    @Args({name: 'filter', type: () => RoommEnterLogFilterManyInput})
    filter: RoommEnterLogFilterManyInput
  ): Promise<RoomEnterLogModel[]> {
    const matchingRoomEnterLogs = await this.roomEnterLogRepo.find({
      where: {
        id: filter.ids && In(filter.ids),
        userID: filter.userIDs && In(filter.userIDs),
        roomID: filter.roomIDs && In(filter.roomIDs),
      },
      take: filter.limit ?? 25,
    });
    return matchingRoomEnterLogs.map(RoomEnterLogModel.fromEntity);
  }
}
