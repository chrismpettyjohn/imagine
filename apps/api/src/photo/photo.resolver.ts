import {omit} from 'lodash';
import {PhotoArgs} from './photo.args';
import {PhotoModel} from './photo.model';
import {PubSub} from 'graphql-subscriptions';
import {Inject, forwardRef} from '@nestjs/common';
import {PhotoEntity} from '../database/photo.entity';
import {UserRepository} from '../database/user.repository';
import {PhotoDataloaderService} from './photo.dataloader';
import {PhotoRepository} from '../database/photo.repository';
import {
  Args,
  Mutation,
  Query,
  Resolver,
  Subscription,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import {RoomRepository} from '../database/room.repository';
import {UserModel} from '../user/user.model';
import {RoomModel} from '../room/room.model';

const pubSub = new PubSub();

@Resolver(() => PhotoModel)
export class PhotoResolver {
  constructor(
    @Inject(forwardRef(() => UserRepository))
    private readonly userRepo: UserRepository,
    private readonly roomRepo: RoomRepository,
    private readonly photoRepo: PhotoRepository,
    private readonly photoDataloaderService: PhotoDataloaderService
  ) {}

  @ResolveField('user', () => UserModel)
  getUser(@Parent() {userID}: PhotoEntity): Promise<UserModel> {
    return this.userRepo.findOneOrFail({id: userID});
  }

  @ResolveField('room', () => RoomModel)
  getRoom(@Parent() {roomID}: PhotoEntity): Promise<RoomModel> {
    return this.roomRepo.findOneOrFail({id: roomID});
  }

  @Query(() => PhotoModel)
  async photo(@Args('id') id: number): Promise<PhotoEntity> {
    return this.photoDataloaderService.loadById(id);
  }

  @Query(() => [PhotoModel])
  photos(@Args() photoArgs: PhotoArgs): Promise<PhotoEntity[]> {
    return this.photoRepo.find(omit(photoArgs, 'other'), photoArgs.other);
  }

  @Mutation(() => Boolean)
  async photoDelete(@Args('id') id: number) {
    const deletedPhoto = await this.photoRepo.findOneOrFail({id});
    pubSub.publish('photoDeleted', {photoDeleted: deletedPhoto});
    await this.photoRepo.delete({id});
    return true;
  }

  @Subscription(() => PhotoModel)
  photoDeleted() {
    return pubSub.asyncIterator('photoDeleted');
  }
}
