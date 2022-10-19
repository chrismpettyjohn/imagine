import {omit} from 'lodash';
import {BadgeArgs} from './badge.args';
import {BadgeModel} from './badge.model';
import {BadgeInput} from './badge.input';
import {PubSub} from 'graphql-subscriptions';
import {Inject, forwardRef} from '@nestjs/common';
import {BadgeEntity} from '../database/badge.entity';
import {BadgeDataloaderService} from './badge.dataloader';
import {BadgeRepository} from '../database/badge.repository';
import {UserRepository} from '../database/user.repository';
import {Args, Mutation, Query, Resolver, Subscription} from '@nestjs/graphql';

const pubSub = new PubSub();

@Resolver(() => BadgeModel)
export class BadgeResolver {
  constructor(
    @Inject(forwardRef(() => UserRepository))
    private readonly userRepo: UserRepository,
    private readonly badgeRepo: BadgeRepository,
    private readonly badgeDataloaderService: BadgeDataloaderService
  ) {}
  @Query(() => BadgeModel)
  async badge(@Args('id') id: number): Promise<BadgeEntity> {
    return this.badgeDataloaderService.loadById(id);
  }

  @Query(() => [BadgeModel])
  badges(@Args() badgeArgs: BadgeArgs): Promise<BadgeEntity[]> {
    return this.badgeRepo.find(omit(badgeArgs, 'other'), badgeArgs.other);
  }

  @Mutation(() => BadgeModel)
  async badgeCreate(
    @Args('newBadge') badgeCreateInput: BadgeInput
  ): Promise<BadgeEntity> {
    const newBadge = await this.badgeRepo.create({
      ...badgeCreateInput,
    });
    pubSub.publish('badgeCreated', {badgeCreated: newBadge});
    return newBadge;
  }

  @Subscription(() => BadgeModel)
  badgeCreated() {
    return pubSub.asyncIterator('badgeCreated');
  }

  @Mutation(() => Boolean)
  async badgeUpdate(
    @Args('id') id: number,
    @Args('badgeChanges') badgeChanges: BadgeInput
  ) {
    await this.badgeRepo.update({id}, badgeChanges);
    await this.badgeDataloaderService.clearByID(id);
    return true;
  }

  @Mutation(() => Boolean)
  async badgeDelete(@Args('id') id: number) {
    const deletedBadge = await this.badgeRepo.findOneOrFail({id});
    pubSub.publish('badgeDeleted', {badgeDeleted: deletedBadge});
    await this.badgeRepo.delete({id});
    await this.badgeDataloaderService.clearByID(id);
    return true;
  }

  @Subscription(() => BadgeModel)
  badgeDeleted() {
    return pubSub.asyncIterator('badgeDeleted');
  }
}
