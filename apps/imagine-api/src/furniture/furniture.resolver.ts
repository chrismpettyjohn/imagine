import {FindOptionsOrder, ILike, In, Like} from 'typeorm';
import {FurnitureModel} from './furniture.model';
import {Args, Query, Resolver} from '@nestjs/graphql';
import {FurnitureEntity} from '../database/furniture.entity';
import {FurnitureRepository} from '../database/furniture.repository';
import {
  FurnitureFilterManyInput,
  FurnitureFilterOneInput,
  FurnitureOrderBy,
} from './furniture.input';

@Resolver(() => FurnitureModel)
export class FurnitureResolver {
  constructor(private readonly furnitureRepo: FurnitureRepository) {}

  @Query(() => FurnitureModel)
  async furniture(
    @Args('filter', {nullable: true, type: () => FurnitureFilterOneInput})
    filter: FurnitureFilterOneInput
  ): Promise<FurnitureModel> {
    const matchingFurniture = await this.furnitureRepo.findOneOrFail({
      id: filter.id,
    });
    return FurnitureModel.fromEntity(matchingFurniture);
  }
  @Query(() => [FurnitureModel])
  async furnitures(
    @Args('filter', {nullable: true, type: () => FurnitureFilterManyInput})
    filter: FurnitureFilterManyInput
  ): Promise<FurnitureModel[]> {
    const orderBy: FindOptionsOrder<FurnitureEntity> = {};

    if (filter.orderBy?.includes(FurnitureOrderBy.GREATEST_VALUE_TYPE)) {
      orderBy.valueType = 'DESC';
    }

    if (filter.orderBy?.includes(FurnitureOrderBy.RECENTLY_ADDED)) {
      orderBy.createdAt = 'DESC';
    }

    const matchingFurniture = await this.furnitureRepo.find({
      where: {
        id: filter.ids && In(filter.ids),
        publicName: filter.publicName && Like(filter.publicName),
        itemName: filter.itemName && ILike(filter.itemName),
        valueType: filter.valueTypes && In(filter.valueTypes),
      },
      order: orderBy,
      skip: filter?.skip ?? 0,
      take: filter?.limit ?? 25,
    });
    return matchingFurniture.map(FurnitureModel.fromEntity);
  }
}
