import {In} from 'typeorm';
import {FurniturePurchaseLogModel} from './furniture-purchase-log.model';
import {Args, Parent, Query, ResolveField, Resolver} from '@nestjs/graphql';
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

  @ResolveField(() => Number, {nullable: true})
  async averageCostCredits(
    @Parent() model: FurniturePurchaseLogModel
  ): Promise<number> {
    const response: [{average_cost_credits: number}] =
      await this.furniturePurchaseLogRepo
        .getInstance()
        .createQueryBuilder()
        .select('AVG(cost_credits) AS average_cost_credits')
        .where('catalog_item_id = :catalogItemID', {
          catalogItemID: model.furnitureID,
        })
        .execute();
    return response[0].average_cost_credits;
  }
  @ResolveField(() => Number, {nullable: true})
  async averageCostPoints(
    @Parent() model: FurniturePurchaseLogModel
  ): Promise<number> {
    const response: [{average_cost_points: number}] =
      await this.furniturePurchaseLogRepo
        .getInstance()
        .createQueryBuilder()
        .select('AVG(cost_points) AS average_cost_points')
        .where('catalog_item_id = :catalogItemID', {
          catalogItemID: model.furnitureID,
        })
        .execute();
    return response[0].average_cost_points;
  }

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
