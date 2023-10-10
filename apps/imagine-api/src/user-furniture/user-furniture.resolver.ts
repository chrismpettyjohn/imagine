import { In } from 'typeorm';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { UserFurnitureModel } from './user-furniture.model';
import { UserFurnitureRepository } from '../database/user-furniture.repository';
import {
  UserFurnitureFilterManyInput,
  UserFurnitureFilterOneInput,
} from './user-furniture.input';

@Resolver(() => UserFurnitureModel)
export class UserFurnitureResolver {
  constructor(private readonly userFurnitureRepo: UserFurnitureRepository) { }

  @Query(() => UserFurnitureModel)
  async userFurniture(
    @Args('filter', { type: () => UserFurnitureFilterOneInput })
    filter: UserFurnitureFilterOneInput
  ): Promise<UserFurnitureModel> {
    const matchingFurniture = await this.userFurnitureRepo.findOneOrFail({
      id: filter.id,
    });
    return UserFurnitureModel.fromEntity(matchingFurniture);
  }

  @Query(() => [UserFurnitureModel])
  async userFurnitures(
    @Args('filter', { type: () => UserFurnitureFilterManyInput, nullable: true })
    filter?: UserFurnitureFilterManyInput
  ): Promise<UserFurnitureModel[]> {
    const response: Array<{ item_id: number }> =
      await this.userFurnitureRepo.getInstance().query(`
        SELECT catalog_item_id, COUNT(*) AS total_sells
        FROM logs_shop_purchases
        LEFT JOIN items_base ON items_base.id = catalog_item_id
        WHERE NOT items_base.value_type  = 'COMMON'
        GROUP BY catalog_item_id
        ORDER BY COUNT(*) ASC
        LIMIT ${filter?.limit ?? 25}
      `);
    if (response.length === 0) {
      return [];
    }
    const matchingFurniture = await this.userFurnitureRepo.find({
      where: {
        id: In(response.map(_ => _.item_id)),
        userID: filter?.userIDs && In(filter.userIDs),
        roomID: filter?.roomIDs && In(filter.roomIDs),
        itemID: filter?.itemIDs && In(filter.itemIDs),
        // TODO: Support value type
      },
      skip: filter?.skip,
      take: filter?.limit ?? 25,
    });
    return matchingFurniture.map(UserFurnitureModel.fromEntity);
  }
}
