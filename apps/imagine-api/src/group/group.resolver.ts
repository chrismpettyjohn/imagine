import {In} from 'typeorm';
import {GroupModel} from './group.model';
import {UserModel} from '../user/user.model';
import {HasScope} from '../session/has-scope.decorator';
import {UserRepository} from '../database/user.repository';
import {GroupRepository} from '../database/group.repository';
import {GroupFilterManyInput, GroupFilterOneInput} from './group.input';
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import {GroupMembershipRepository} from '../database/group-membership.repository';

@Resolver(() => GroupModel)
export class GroupResolver {
  constructor(
    private readonly userRepo: UserRepository,
    private readonly groupRepo: GroupRepository,
    private readonly groupMembershipRepo: GroupMembershipRepository
  ) {}

  @ResolveField(() => UserModel, {nullable: true})
  async user(@Parent() group: GroupModel): Promise<UserModel | null> {
    return this.userRepo.findOne({
      where: {
        id: group.userID,
      },
    });
  }

  @ResolveField(() => Number, {nullable: true})
  async userCount(@Parent() group: GroupModel): Promise<number> {
    const response: [{user_count: number}] = await this.groupMembershipRepo
      .getInstance()
      .createQueryBuilder('memberships')
      .select('COUNT(*) AS user_count')
      .where('guild_id = :groupID', {groupID: group.id})
      .execute();
    return response[0].user_count;
  }

  @Query(() => GroupModel)
  async group(
    @Args('filter') filter: GroupFilterOneInput
  ): Promise<GroupModel> {
    return this.groupRepo.findOneOrFail({id: filter.id});
  }

  @Query(() => [GroupModel])
  async groups(
    @Args('filter') filter: GroupFilterManyInput
  ): Promise<GroupModel[]> {
    const matchingGroups = await this.groupRepo.find({
      where: {
        id: filter.ids && In(filter.ids),
        userID: filter.userIDs && In(filter.userIDs),
      },
      skip: filter?.skip,
      take: filter?.limit ?? 25,
    });
    return matchingGroups.map(GroupModel.fromEntity);
  }

  @Mutation(() => Boolean)
  @HasScope('manageGroups')
  async groupDelete(@Args('id') id: number) {
    await this.groupRepo.delete({id});
    return true;
  }
}
