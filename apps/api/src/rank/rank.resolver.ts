import {omit} from 'lodash';
import {RankArgs} from './rank.args';
import {RankModel} from './rank.model';
import {PubSub} from 'graphql-subscriptions';
import {Inject, forwardRef} from '@nestjs/common';
import {RankEntity} from '../database/rank.entity';
import {RankDataloaderService} from './rank.dataloader';
import {RankRepository} from '../database/rank.repository';
import {UserRepository} from '../database/user.repository';
import {RankCreateInput, RankUpdateInput} from './rank.input';
import {Args, Mutation, Query, Resolver, Subscription} from '@nestjs/graphql';

const pubSub = new PubSub();

@Resolver(() => RankModel)
export class RankResolver {
  constructor(
    @Inject(forwardRef(() => UserRepository))
    private readonly userRepo: UserRepository,
    private readonly rankRepo: RankRepository,
    private readonly rankDataloaderService: RankDataloaderService
  ) {}
  @Query(() => RankModel)
  async rank(@Args('id') id: number): Promise<RankEntity> {
    return this.rankDataloaderService.loadById(id);
  }

  @Query(() => [RankModel])
  ranks(@Args() rankArgs: RankArgs): Promise<RankEntity[]> {
    return this.rankRepo.find(omit(rankArgs, 'other'), rankArgs.other);
  }

  @Mutation(() => RankModel)
  async rankCreate(@Args('newRank') rankCreateInput: RankCreateInput): Promise<RankEntity> {
    const newRank = await this.rankRepo.create({
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
  async rankUpdate(@Args('id') id: number, @Args('rankChanges') rankChanges: RankUpdateInput) {
    await this.rankRepo.update({id}, rankChanges);
    return true;
  }

  @Mutation(() => Boolean)
  async rankDelete(@Args('id') id: number) {
    const deletedRank = await this.rankRepo.findOneOrFail({id});
    pubSub.publish('rankDeleted', {rankDeleted: deletedRank});
    await this.rankRepo.delete({id});
    return true;
  }

  @Subscription(() => RankModel)
  rankDeleted() {
    return pubSub.asyncIterator('rankDeleted');
  }
}
