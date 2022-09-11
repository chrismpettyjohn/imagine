import {omit} from 'lodash';
import {RoomArgs} from './room.args';
import {RoomModel} from './room.model';
import {PubSub} from 'graphql-subscriptions';
import {Inject, forwardRef} from '@nestjs/common';
import {RoomEntity} from '../database/room.entity';
import {UserRepository} from '../database/user.repository';
import {RoomDataloaderService} from './room.dataloader';
import {RoomRepository} from '../database/room.repository';
import {
  Args,
  Mutation,
  Query,
  Resolver,
  Subscription,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import {UserModel} from '../user/user.model';
import {ArticleEntity} from '../database/article.entity';

const pubSub = new PubSub();

@Resolver(() => RoomModel)
export class RoomResolver {
  constructor(
    @Inject(forwardRef(() => UserRepository))
    private readonly userRepo: UserRepository,
    private readonly roomRepo: RoomRepository,
    private readonly roomDataloaderService: RoomDataloaderService
  ) {}

  @ResolveField('user', () => UserModel)
  getUser(@Parent() {userID}: ArticleEntity): Promise<UserModel> {
    return this.userRepo.findOneOrFail({id: userID});
  }

  @Query(() => RoomModel)
  async room(@Args('id') id: number): Promise<RoomEntity> {
    return this.roomDataloaderService.loadById(id);
  }

  @Query(() => [RoomModel])
  rooms(@Args() roomArgs: RoomArgs): Promise<RoomEntity[]> {
    return this.roomRepo.find(omit(roomArgs, 'other'), roomArgs.other);
  }

  @Mutation(() => Boolean)
  async roomDelete(@Args('id') id: number) {
    const deletedRoom = await this.roomRepo.findOneOrFail({id});
    pubSub.publish('roomDeleted', {roomDeleted: deletedRoom});
    await this.roomRepo.delete({id});
    return true;
  }

  @Subscription(() => RoomModel)
  roomDeleted() {
    return pubSub.asyncIterator('roomDeleted');
  }
}
