import {In} from 'typeorm';
import {RoomModel} from './room.model';
import {UserModel} from '../user/user.model';
import {Inject, forwardRef} from '@nestjs/common';
import {ArticleEntity} from '../database/article.entity';
import {UserRepository} from '../database/user.repository';
import {RoomRepository} from '../database/room.repository';
import {RoomFilterManyInput, RoomFilterOneInput} from './room.input';
import {
  Args,
  Mutation,
  Query,
  Resolver,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import {HasScope} from '../session/has-scope.decorator';

@Resolver(() => RoomModel)
export class RoomResolver {
  constructor(
    @Inject(forwardRef(() => UserRepository))
    private readonly userRepo: UserRepository,
    private readonly roomRepo: RoomRepository
  ) {}

  @ResolveField(() => UserModel, {nullable: true})
  user(@Parent() {userID}: ArticleEntity): Promise<UserModel | null> {
    return this.userRepo.findOne({
      where: {
        id: userID,
      },
    });
  }

  @Query(() => RoomModel)
  async room(@Args('filter') filter: RoomFilterOneInput): Promise<RoomModel> {
    const matchingRoom = await this.roomRepo.findOneOrFail({id: filter.id});
    return RoomModel.fromEntity(matchingRoom);
  }

  @Query(() => [RoomModel])
  async rooms(
    @Args('filter') filter: RoomFilterManyInput
  ): Promise<RoomModel[]> {
    const matchingRooms = await this.roomRepo.find({
      where: {
        id: filter.ids && In(filter.ids),
        userID: filter.userIDs && In(filter.userIDs),
      },
      take: filter.limit ?? 25,
    });
    return matchingRooms.map(RoomModel.fromEntity);
  }

  @Mutation(() => Boolean)
  @HasScope('manageRooms')
  async roomDelete(@Args('id') id: number) {
    await this.roomRepo.delete({id});
    return true;
  }
}
