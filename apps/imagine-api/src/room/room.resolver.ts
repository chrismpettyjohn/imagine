import {omit} from 'lodash';
import {RoomArgs} from './room.args';
import {RoomModel} from './room.model';
import {UserModel} from '../user/user.model';
import {Inject, forwardRef} from '@nestjs/common';
import {RoomEntity} from '../database/room.entity';
import {ArticleEntity} from '../database/article.entity';
import {UserRepository} from '../database/user.repository';
import {RoomRepository} from '../database/room.repository';
import {
  Args,
  Mutation,
  Query,
  Resolver,
  ResolveField,
  Parent,
} from '@nestjs/graphql';

@Resolver(() => RoomModel)
export class RoomResolver {
  constructor(
    @Inject(forwardRef(() => UserRepository))
    private readonly userRepo: UserRepository,
    private readonly roomRepo: RoomRepository
  ) {}

  @ResolveField('user', () => UserModel)
  getUser(@Parent() {userID}: ArticleEntity): Promise<UserModel> {
    return this.userRepo.findOneOrFail({id: userID});
  }

  @Query(() => RoomModel)
  async room(@Args('id') id: number): Promise<RoomEntity> {
    return this.roomRepo.findOneOrFail({id});
  }

  @Query(() => [RoomModel])
  rooms(@Args() roomArgs: RoomArgs): Promise<RoomEntity[]> {
    return this.roomRepo._find(omit(roomArgs, 'other'), roomArgs.other);
  }

  @Mutation(() => Boolean)
  async roomDelete(@Args('id') id: number) {
    const deletedRoom = await this.roomRepo.findOneOrFail({id});
    await this.roomRepo.delete({id});
    return true;
  }
}
