import {omit} from 'lodash';
import {GroupArgs} from './group.args';
import {GroupModel} from './group.model';
import {UserModel} from '../user/user.model';
import {GroupEntity} from '../database/group.entity';
import {UserRepository} from '../database/user.repository';
import {GroupRepository} from '../database/group.repository';
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';

@Resolver(() => GroupModel)
export class GroupResolver {
  constructor(
    private readonly userRepo: UserRepository,
    private readonly groupRepo: GroupRepository
  ) {}

  @ResolveField(() => UserModel)
  async user(@Parent() group: GroupModel): Promise<UserModel> {
    return this.userRepo.findOneOrFail({id: group.userID});
  }

  @Query(() => GroupModel)
  async group(@Args('id') id: number): Promise<GroupEntity> {
    return this.groupRepo.findOneOrFail({id});
  }

  @Query(() => [GroupModel])
  groups(@Args() groupArgs: GroupArgs): Promise<GroupEntity[]> {
    return this.groupRepo._find(omit(groupArgs, 'other'), groupArgs.other);
  }

  @Mutation(() => Boolean)
  async groupDelete(@Args('id') id: number) {
    await this.groupRepo.delete({id});
    return true;
  }
}
