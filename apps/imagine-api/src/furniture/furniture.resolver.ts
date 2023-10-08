import {Args, Query, Resolver} from '@nestjs/graphql';
import {FurnitureModel} from './furniture.model';
import {FurnitureRepository} from '../database/furniture.repository';
import {
  FurnitureFilterManyInput,
  FurnitureFilterOneInput,
  FurnitureOrderBy,
} from './furniture.input';
import {FindOptionsOrder, In} from 'typeorm';
import {FurnitureEntity} from '../database/furniture.entity';

@Resolver(() => FurnitureModel)
export class FurnitureResolver {
  constructor(private readonly furnitureRepo: FurnitureRepository) {}

  @Query(() => FurnitureModel)
  async furniture(
    @Args('filter', {type: () => FurnitureFilterOneInput})
    filter: FurnitureFilterOneInput
  ): Promise<FurnitureModel> {
    const matchingFurniture = await this.furnitureRepo.findOneOrFail({
      id: filter.id,
    });
    return FurnitureModel.fromEntity(matchingFurniture);
  }
  @Query(() => [FurnitureModel])
  async furnitures(
    @Args('filter', {type: () => FurnitureFilterManyInput})
    filter: FurnitureFilterManyInput
  ): Promise<FurnitureModel[]> {
    const orderBy: FindOptionsOrder<FurnitureEntity> = {};

    if (filter.orderBy?.includes(FurnitureOrderBy.GREATEST_VALUE_TYPE)) {
      orderBy.valueType = 'DESC';
    }

    const matchingFurniture = await this.furnitureRepo.find({
      where: {
        id: filter.ids && In(filter.ids),
        valueType: filter.valueTypes && In(filter.valueTypes),
      },
      order: orderBy,
      skip: filter.skip ?? 0,
      take: filter.limit ?? 25,
    });
    return matchingFurniture.map(FurnitureModel.fromEntity);
  }
}
