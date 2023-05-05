import {omit} from 'lodash';
import {GroupArgs} from './group.args';
import {GroupModel} from './group.model';
import {PubSub} from 'graphql-subscriptions';
import {GroupEntity} from '../database/group.entity';
import {GroupDataloaderService} from './group.dataloader';
import {GroupRepository} from '../database/group.repository';
import {Args, Mutation, Query, Resolver, Subscription} from '@nestjs/graphql';

const pubSub = new PubSub();

@Resolver(() => GroupModel)
export class GroupResolver {
  constructor(
    private readonly groupRepo: GroupRepository,
    private readonly groupDataloaderService: GroupDataloaderService
  ) {}

  @Query(() => GroupModel)
  async group(@Args('id') id: number): Promise<GroupEntity> {
    return this.groupDataloaderService.loadById(id);
  }

  @Query(() => [GroupModel])
  groups(@Args() groupArgs: GroupArgs): Promise<GroupEntity[]> {
    return this.groupRepo.find(omit(groupArgs, 'other'), groupArgs.other);
  }

  @Mutation(() => Boolean)
  async groupDelete(@Args('id') id: number) {
    const deletedGroup = await this.groupRepo.findOneOrFail({id});
    pubSub.publish('groupDeleted', {groupDeleted: deletedGroup});
    await this.groupRepo.delete({id});
    await this.groupDataloaderService.clearByID(id);
    return true;
  }

  @Subscription(() => GroupModel)
  groupDeleted() {
    return pubSub.asyncIterator('groupDeleted');
  }
}
