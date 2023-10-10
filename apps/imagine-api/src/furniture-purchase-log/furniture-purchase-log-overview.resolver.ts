import DayJS from 'dayjs';
import { Resolver, Query, ResolveField, Args, Parent } from '@nestjs/graphql';
import { FurniturePurchaseLogOverviewModel } from './furniture-purchase-log-overview.model';
import { FurniturePurchaseLogRepository } from '../database/furniture-purchase-log.repository';
import {
  FurniturePurchaseLogOverviewFilterManyInput,
  FurniturePurchaseLogOverviewFilterOneInput,
} from './furniture-purchase-log-overview.input';

@Resolver(() => FurniturePurchaseLogOverviewModel)
export class FurniturePurchaseLogOverviewResolver {
  constructor(
    private readonly furniturePurchaseLogRepo: FurniturePurchaseLogRepository
  ) { }

  @ResolveField(() => Number, { nullable: true })
  async totalSells(
    @Parent() model: FurniturePurchaseLogOverviewModel
  ): Promise<number> {
    const response: [{ total_sells: number }] =
      await this.furniturePurchaseLogRepo
        .getInstance()
        .createQueryBuilder()
        .select('COUNT(*) AS total_sells')
        .where('catalog_item_id = :catalogItemID', {
          catalogItemID: model.furnitureID,
        })
        .execute();
    return response[0].total_sells;
  }

  @ResolveField(() => Number, { nullable: true })
  async averageCostCredits(
    @Parent() model: FurniturePurchaseLogOverviewModel
  ): Promise<number> {
    if (model.averageCostCredits !== undefined) {
      return model.averageCostCredits;
    }
    const response: [{ avg_cost_credits: number }] =
      await this.furniturePurchaseLogRepo
        .getInstance()
        .createQueryBuilder()
        .select('AVG(cost_credits) AS avg_cost_credits')
        .where('catalog_item_id = :catalogItemID', {
          catalogItemID: model.furnitureID,
        })
        .execute();
    return response[0].avg_cost_credits;
  }

  @ResolveField(() => Number, { nullable: true })
  async averageCostPoints(
    @Parent() model: FurniturePurchaseLogOverviewModel
  ): Promise<number> {
    if (model.averageCostPoints !== undefined) {
      return model.averageCostPoints;
    }
    const response: [{ avg_cost_points: number }] =
      await this.furniturePurchaseLogRepo
        .getInstance()
        .createQueryBuilder()
        .select('AVG(cost_points) AS avg_cost_points')
        .where('catalog_item_id = :catalogItemID', {
          catalogItemID: model.furnitureID,
        })
        .execute();
    return response[0].avg_cost_points;
  }

  @Query(() => [FurniturePurchaseLogOverviewModel])
  async furniturePurchaseLogsOverviewRecentlyAdded(
    @Args('filter', {
      nullable: true,
      type: () => FurniturePurchaseLogOverviewFilterManyInput,
    })
    filter: FurniturePurchaseLogOverviewFilterManyInput
  ): Promise<FurniturePurchaseLogOverviewModel[]> {
    const response: Array<{ catalog_item_id: number; avg_cost_credits: number }> =
      await this.furniturePurchaseLogRepo
        .getInstance()
        .createQueryBuilder()
        .select('catalog_item_id, timestamp')
        .groupBy('catalog_item_id')
        .orderBy('timestamp', 'DESC')
        .skip(filter?.skip ?? 0)
        .limit(filter?.limit ?? 25)
        .execute();
    return response.map(_ => ({
      furnitureID: _.catalog_item_id,
      averageCostCredits: _.avg_cost_credits,
    }));
  }

  @Query(() => [FurniturePurchaseLogOverviewModel])
  async furniturePurchaseLogsOverviewTrending(
    @Args('filter', {
      nullable: true,
      type: () => FurniturePurchaseLogOverviewFilterManyInput,
    })
    filter: FurniturePurchaseLogOverviewFilterManyInput
  ): Promise<FurniturePurchaseLogOverviewModel[]> {
    const [currentDate, oneMonthAgo] = [
      DayJS().unix(),
      DayJS().subtract(1, 'month').unix(),
    ];
    // TODO: Add support for offset
    const response: Array<{ catalog_item_id: number; total_sells: number }> =
      await this.furniturePurchaseLogRepo.getInstance().query(`
        SELECT catalog_item_id, COUNT(*) AS total_sells
        FROM logs_shop_purchases
        LEFT JOIN items_base ON items_base.id = catalog_item_id
        WHERE NOT items_base.value_type  = 'COMMON'
        AND timestamp >= ${oneMonthAgo}
        AND timestamp <= ${currentDate}
        GROUP BY catalog_item_id
        ORDER BY COUNT(*) DESC
        LIMIT ${filter?.limit ?? 25}
      `);
    return response.map(_ => ({
      furnitureID: _.catalog_item_id,
      totalSells: _.total_sells,
    }));
  }

  @Query(() => [FurniturePurchaseLogOverviewModel])
  async furniturePurchaseLogsOverviewTopCredits(
    @Args('filter', {
      nullable: true,
      type: () => FurniturePurchaseLogOverviewFilterManyInput,
    })
    filter: FurniturePurchaseLogOverviewFilterManyInput
  ): Promise<FurniturePurchaseLogOverviewModel[]> {
    // TODO: Add support for offset
    const response: Array<{ catalog_item_id: number; avg_cost_credits: number }> =
      await this.furniturePurchaseLogRepo.getInstance().query(`
        SELECT catalog_item_id, AVG(cost_credits) AS avg_cost_credits
        FROM logs_shop_purchases
        LEFT JOIN items_base ON items_base.id = catalog_item_id
        WHERE NOT items_base.value_type  = 'COMMON'
        GROUP BY catalog_item_id
        ORDER BY avg_cost_credits DESC
        LIMIT ${filter?.limit ?? 25}
      `);
    return response.map(_ => ({
      furnitureID: _.catalog_item_id,
      averageCostCredits: _.avg_cost_credits,
    }));
  }

  @Query(() => [FurniturePurchaseLogOverviewModel])
  async furniturePurchaseLogsOverviewTopCostPoints(
    @Args('filter', {
      nullable: true,
      type: () => FurniturePurchaseLogOverviewFilterManyInput,
    })
    filter: FurniturePurchaseLogOverviewFilterManyInput
  ): Promise<FurniturePurchaseLogOverviewModel[]> {
    // TODO: Add support for offset
    const response: Array<{ catalog_item_id: number; avg_cost_points: number }> =
      await this.furniturePurchaseLogRepo.getInstance().query(`
        SELECT catalog_item_id, AVG(cost_points) AS avg_cost_points
        FROM logs_shop_purchases
        LEFT JOIN items_base ON items_base.id = catalog_item_id
        WHERE NOT items_base.value_type  = 'COMMON'
        GROUP BY catalog_item_id
        ORDER BY avg_cost_points DESC
        LIMIT ${filter?.limit ?? 25}
      `);
    return response.map(_ => ({
      furnitureID: _.catalog_item_id,
      averageCostPoints: _.avg_cost_points,
    }));
  }

  @Query(() => [FurniturePurchaseLogOverviewModel])
  async furniturePurchaseLogOverviewLeastSells(
    @Args('filter', {
      nullable: true,
      type: () => FurniturePurchaseLogOverviewFilterManyInput,
    })
    filter: FurniturePurchaseLogOverviewFilterManyInput
  ): Promise<FurniturePurchaseLogOverviewModel[]> {
    // TODO: Add support for offset
    const response: Array<{ catalog_item_id: number; total_sells: number }> =
      await this.furniturePurchaseLogRepo.getInstance().query(`
        SELECT catalog_item_id, COUNT(*) AS total_sells
        FROM logs_shop_purchases
        LEFT JOIN items_base ON items_base.id = catalog_item_id
        WHERE NOT items_base.value_type  = 'COMMON'
        GROUP BY catalog_item_id
        ORDER BY COUNT(*) ASC
        LIMIT ${filter?.limit ?? 25}
      `);
    return response.map(_ => ({
      furnitureID: _.catalog_item_id,
      totalSells: _.total_sells,
    }));
  }

  @Query(() => [FurniturePurchaseLogOverviewModel])
  async furniturePurchaseLogsOverviewTopSells(
    @Args('filter', {
      nullable: true,
      type: () => FurniturePurchaseLogOverviewFilterManyInput,
    })
    filter: FurniturePurchaseLogOverviewFilterManyInput
  ): Promise<FurniturePurchaseLogOverviewModel[]> {
    // TODO: Add support for offset
    const response: Array<{ catalog_item_id: number; total_sells: number }> =
      await this.furniturePurchaseLogRepo.getInstance().query(`
        SELECT catalog_item_id, COUNT(*) AS total_sells
        FROM logs_shop_purchases
        LEFT JOIN items_base ON items_base.id = catalog_item_id
        WHERE NOT items_base.value_type  = 'COMMON'
        GROUP BY catalog_item_id
        ORDER BY COUNT(*) DESC
        LIMIT ${filter?.limit ?? 25}
      `);
    return response.map(_ => ({
      furnitureID: _.catalog_item_id,
      totalSells: _.total_sells,
    }));
  }

  @Query(() => FurniturePurchaseLogOverviewModel)
  async furniturePurchaseLogOverview(
    @Args('filter', {
      nullable: true,
      type: () => FurniturePurchaseLogOverviewFilterOneInput,
    })
    filter: FurniturePurchaseLogOverviewFilterOneInput
  ): Promise<FurniturePurchaseLogOverviewModel> {
    return {
      furnitureID: filter.furnitureID,
    };
  }
}
