import {In} from 'typeorm';
import {Args, Query, Resolver} from '@nestjs/graphql';
import {FurniturePurchaseLogModel} from './furniture-purchase-log.model';
import {FurniturePurchaseLogRepository} from '../database/furniture-purchase-log.repository';
import {
  FurniturePurchaseLogFilterManyInput,
  FurniturePurchaseLogFilterOneInput,
} from './furniture-purchase-log.input';

@Resolver(() => FurniturePurchaseLogModel)
export class FurniturePurchaseLogResolver {
  constructor(
    private readonly furniturePurchaseLogRepo: FurniturePurchaseLogRepository
  ) {}

  @Query(() => FurniturePurchaseLogModel)
  async furniturePurchaseLog(
    @Args('filter', {type: () => FurniturePurchaseLogFilterOneInput})
    filter: FurniturePurchaseLogFilterOneInput
  ): Promise<FurniturePurchaseLogModel> {
    const matchingFurniturePurchaseLog =
      await this.furniturePurchaseLogRepo.findOneOrFail({id: filter.id});
    return FurniturePurchaseLogModel.fromEntity(matchingFurniturePurchaseLog);
  }

  @Query(() => [FurniturePurchaseLogModel])
  async furniturePurchaseLogs(
    @Args('filter', {type: () => FurniturePurchaseLogFilterManyInput})
    filter: FurniturePurchaseLogFilterManyInput
  ): Promise<FurniturePurchaseLogModel[]> {
    const matchingFurniturePurchaseLogs =
      await this.furniturePurchaseLogRepo.find({
        where: {
          id: filter.ids && In(filter.ids),
          furnitureID: filter.furnitureIDs && In(filter.furnitureIDs),
          userID: filter.userIDs && In(filter.userIDs),
          itemIDs: filter.itemIDs && In(filter.itemIDs),
        },
        skip: filter.skip,
        take: filter.limit ?? 25,
      });
    return matchingFurniturePurchaseLogs.map(
      FurniturePurchaseLogModel.fromEntity
    );
  }
}
