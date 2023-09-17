import {In} from 'typeorm';
import {PhotoModel} from './photo.model';
import {UserModel} from '../user/user.model';
import {RoomModel} from '../room/room.model';
import {Inject, forwardRef} from '@nestjs/common';
import {PhotoEntity} from '../database/photo.entity';
import {RoomRepository} from '../database/room.repository';
import {UserRepository} from '../database/user.repository';
import {PhotoRepository} from '../database/photo.repository';
import {PhotoFilterManyInput, PhotoFilterOneInput} from './photo.input';
import {
  Args,
  Mutation,
  Query,
  Resolver,
  ResolveField,
  Parent,
} from '@nestjs/graphql';

@Resolver(() => PhotoModel)
export class PhotoResolver {
  constructor(
    @Inject(forwardRef(() => UserRepository))
    private readonly userRepo: UserRepository,
    private readonly roomRepo: RoomRepository,
    private readonly photoRepo: PhotoRepository
  ) {}

  @ResolveField('user', () => UserModel, {nullable: true})
  getUser(@Parent() {userID}: PhotoEntity): Promise<UserModel | null> {
    return this.userRepo.findOne({
      where: {
        id: userID,
      },
    });
  }

  @ResolveField('room', () => RoomModel, {nullable: true})
  getRoom(@Parent() {roomID}: PhotoEntity): Promise<RoomModel | null> {
    return this.roomRepo.findOne({
      where: {id: roomID},
    });
  }

  @Query(() => PhotoModel)
  async photo(
    @Args('filter') filter: PhotoFilterOneInput
  ): Promise<PhotoEntity> {
    return this.photoRepo.findOneOrFail({id: filter.id});
  }

  @Query(() => [PhotoModel])
  photos(
    @Args('filter', {type: () => PhotoFilterManyInput, nullable: true})
    filter: PhotoFilterManyInput
  ): Promise<PhotoEntity[]> {
    return this.photoRepo.find({
      where: {
        id: filter.ids && In(filter.ids),
        userID: filter.userIDs && In(filter.userIDs),
      },
      order: {
        id: 'DESC',
      },
      take: filter.limit ?? 25,
    });
  }

  @Mutation(() => Boolean)
  async photoDelete(@Args('id') id: number) {
    await this.photoRepo.delete({id});
    return true;
  }
}
