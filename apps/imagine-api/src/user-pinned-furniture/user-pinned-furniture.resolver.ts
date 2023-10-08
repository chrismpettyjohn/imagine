import DayJS from 'dayjs';
import {In} from 'typeorm';
import {UserEntity} from '../database/user.entity';
import {GetUser} from '../session/get-user.decorator';
import {HasSession} from '../session/has-session.decorator';
import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import {UserPinnedFurnitureModel} from './user-pinned-furniture.model';
import {PinnedFurnitureRepository} from '../database/pinned-furniture.repository';
import {
  UserPinnedFurnitureCreateInput,
  UserPinnedFurnitureFilterManyInput,
  UserPinnedFurnitureFilterOneInput,
} from './user-pinned-furniture.input';

@Resolver(() => UserPinnedFurnitureModel)
export class UserPinnedFurnitureResolver {
  constructor(
    private readonly pinnedFurnitureRepo: PinnedFurnitureRepository
  ) {}

  @Query(() => UserPinnedFurnitureModel)
  @HasSession()
  async userPinnedFurniture(
    @Args('filter', {type: () => UserPinnedFurnitureFilterOneInput})
    filter: UserPinnedFurnitureFilterOneInput,
    @GetUser() session: UserEntity
  ): Promise<UserPinnedFurnitureModel> {
    const matchingPinnedFurniture =
      await this.pinnedFurnitureRepo.findOneOrFail({
        id: filter.id,
        userID: session.id!,
      });
    return UserPinnedFurnitureModel.fromEntity(matchingPinnedFurniture);
  }
  @Query(() => [UserPinnedFurnitureModel])
  @HasSession()
  async userPinnedFurnitures(
    @Args('filter', {type: () => UserPinnedFurnitureFilterManyInput})
    filter: UserPinnedFurnitureFilterManyInput,
    @GetUser() session: UserEntity
  ): Promise<UserPinnedFurnitureModel[]> {
    const matchingPinnedFurnitures = await this.pinnedFurnitureRepo.find({
      where: {
        id: filter.ids && In(filter.ids),
        userID: session.id!,
        furnitureID: filter.furnitureIDs && In(filter.furnitureIDs),
      },
      skip: filter.skip,
      take: filter.limit ?? 25,
    });
    return matchingPinnedFurnitures.map(UserPinnedFurnitureModel.fromEntity);
  }

  @Mutation(() => UserPinnedFurnitureModel)
  @HasSession()
  async userPinnedFurnitureCreate(
    @Args('input', {type: () => UserPinnedFurnitureCreateInput})
    input: UserPinnedFurnitureCreateInput,
    @GetUser() session: UserEntity
  ): Promise<UserPinnedFurnitureModel> {
    const currentDate = DayJS().unix();
    const newPinnedFurniture = await this.pinnedFurnitureRepo.create({
      userID: session.id!,
      furnitureID: input.furnitureID,
      createdAt: currentDate,
      updatedAt: currentDate,
    });
    return UserPinnedFurnitureModel.fromEntity(newPinnedFurniture);
  }
  @Mutation(() => Boolean)
  @HasSession()
  async userPinnedFurnitureDelete(
    @Args('input', {type: () => UserPinnedFurnitureFilterOneInput})
    filter: UserPinnedFurnitureFilterOneInput,
    @GetUser() session: UserEntity
  ): Promise<boolean> {
    await this.pinnedFurnitureRepo.delete({
      id: filter.id,
      userID: session.id!,
    });
    return true;
  }
}
