import { omit } from 'lodash';
import { GroupArgs } from './group.args';
import { GroupModel } from './group.model';
import { PubSub } from 'graphql-subscriptions';
import { GroupEntity } from '../database/group.entity';
import { GroupDataloaderService } from './group.dataloader';
import { GroupRepository } from '../database/group.repository';
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
  Subscription,
} from '@nestjs/graphql';
import { UserModel } from '../user/user.model';
import { UserRepository } from '../database/user.repository';

const pubSub = new PubSub();

@Resolver(() => GroupModel)
export class GroupResolver {
  constructor(
    private readonly userRepo: UserRepository,
    private readonly groupRepo: GroupRepository,
    private readonly groupDataloaderService: GroupDataloaderService
  ) { }

  @ResolveField(() => UserModel)
  async user(@Parent() group: GroupModel): Promise<UserModel> {
    return this.userRepo.findOneOrFail({ id: group.userID });
  }

  @Query(() => GroupModel)
  async group(@Args('id') id: number): Promise<GroupEntity> {
    return this.groupDataloaderService.loadById(id);
  }

  @Query(() => [GroupModel])
  groups(@Args() groupArgs: GroupArgs): Promise<GroupEntity[]> {
    return this.groupRepo._find(omit(groupArgs, 'other'), groupArgs.other);
  }

  @Mutation(() => Boolean)
  async groupDelete(@Args('id') id: number) {
    const deletedGroup = await this.groupRepo.findOneOrFail({ id });
    pubSub.publish('groupDeleted', { groupDeleted: deletedGroup });
    await this.groupRepo.delete({ id });
    await this.groupDataloaderService.clearByID(id);
    return true;
  }

  @Subscription(() => GroupModel)
  groupDeleted() {
    return pubSub.asyncIterator('groupDeleted');
  }
}
