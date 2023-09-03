import {omit} from 'lodash';
import {RankArgs} from './rank.args';
import {RankModel} from './rank.model';
import {PubSub} from 'graphql-subscriptions';
import {Inject, forwardRef} from '@nestjs/common';
import {RankEntity, RankSiteShowStaff} from '../database/rank.entity';
import {RankDataloaderService} from './rank.dataloader';
import {RankRepository} from '../database/rank.repository';
import {UserRepository} from '../database/user.repository';
import {
  RankCreateInput,
  RankFilterManyInput,
  RankUpdateInput,
} from './rank.input';
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
import {In} from 'typeorm';

const pubSub = new PubSub();

@Resolver(() => RankModel)
export class RankResolver {
  constructor(
    @Inject(forwardRef(() => UserRepository))
    private readonly userRepo: UserRepository,
    private readonly rankRepo: RankRepository,
    private readonly rankDataloaderService: RankDataloaderService
  ) {}

  @ResolveField('users', () => [UserModel])
  getUsers(@Parent() {id}: RankEntity): Promise<UserModel[]> {
    return this.userRepo._find({rankID: id});
  }

  @Query(() => RankModel)
  async rank(@Args('id') id: number): Promise<RankEntity> {
    return this.rankDataloaderService.loadById(id);
  }

  @Query(() => [RankModel])
  ranks(@Args('filter') filter: RankFilterManyInput): Promise<RankEntity[]> {
    return this.rankRepo.find({
      where: {
        id: filter.ids && In(filter.ids),
        siteShowStaff: filter.showStaffOnly ? RankSiteShowStaff.Yes : undefined,
      },
      order: {
        id: 'DESC',
      },
    });
  }

  @Mutation(() => RankModel)
  async rankCreate(
    @Args('newRank') rankCreateInput: RankCreateInput
  ): Promise<RankEntity> {
    const newRank = await this.rankRepo.create({
      siteShowStaff: rankCreateInput.showStaff
        ? RankSiteShowStaff.Yes
        : RankSiteShowStaff.No,
      ...rankCreateInput,
    });
    pubSub.publish('rankCreated', {rankCreated: newRank});
    return newRank;
  }

  @Subscription(() => RankModel)
  rankCreated() {
    return pubSub.asyncIterator('rankCreated');
  }

  @Mutation(() => Boolean)
  async rankUpdate(
    @Args('id') id: number,
    @Args('rankChanges') rankChanges: RankUpdateInput
  ) {
    const currentRank = await this.rankDataloaderService.loadById(id);
    await this.rankRepo.update(
      {id},
      {
        ...rankChanges,
        scopes: {
          ...currentRank.scopes,
          ...rankChanges.scopes,
        },
      }
    );
    await this.rankDataloaderService.clearByID(id);
    return true;
  }

  @Mutation(() => Boolean)
  async rankDelete(@Args('id') id: number) {
    const deletedRank = await this.rankRepo.findOneOrFail({id});
    pubSub.publish('rankDeleted', {rankDeleted: deletedRank});
    await this.rankRepo.delete({id});
    await this.rankDataloaderService.clearByID(id);
    return true;
  }

  @Subscription(() => RankModel)
  rankDeleted() {
    return pubSub.asyncIterator('rankDeleted');
  }
}
