import {In} from 'typeorm';
import {Args, Query, Resolver} from '@nestjs/graphql';
import {UserFurnitureModel} from './user-furniture.model';
import {UserFurnitureRepository} from '../database/user-furniture.repository';
import {
  UserFurnitureFilterManyInput,
  UserFurnitureFilterOneInput,
} from './user-furniture.input';

@Resolver(() => UserFurnitureModel)
export class UserFurnitureResolver {
  constructor(private readonly userFurnitureRepo: UserFurnitureRepository) {}

  @Query(() => UserFurnitureModel)
  async userFurniture(
    @Args('filter', {type: () => UserFurnitureFilterOneInput})
    filter: UserFurnitureFilterOneInput
  ): Promise<UserFurnitureModel> {
    const matchingFurniture = await this.userFurnitureRepo.findOneOrFail({
      id: filter.id,
    });
    return UserFurnitureModel.fromEntity(matchingFurniture);
  }

  @Query(() => [UserFurnitureModel])
  async userFurnitures(
    @Args('filter', {type: () => UserFurnitureFilterManyInput, nullable: true})
    filter?: UserFurnitureFilterManyInput
  ): Promise<UserFurnitureModel[]> {
    const matchingFurniture = await this.userFurnitureRepo.find({
      where: {
        id: filter?.ids && In(filter.ids),
        userID: filter?.userIDs && In(filter.userIDs),
        roomID: filter?.roomIDs && In(filter.roomIDs),
        itemID: filter?.itemIDs && In(filter.itemIDs),
      },
      skip: filter?.skip,
      take: filter?.limit ?? 25,
    });
    return matchingFurniture.map(UserFurnitureModel.fromEntity);
  }
}
