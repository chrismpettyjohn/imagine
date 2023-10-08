import {In} from 'typeorm';
import {GroupModel} from './group.model';
import {UserModel} from '../user/user.model';
import {UserRepository} from '../database/user.repository';
import {GroupRepository} from '../database/group.repository';
import {GroupMembershipModel} from './group-membership.model';
import {GroupMembershipFilterManyInput} from './group-membership.input';
import {Args, Parent, Query, ResolveField, Resolver} from '@nestjs/graphql';
import {GroupMembershipRepository} from '../database/group-membership.repository';

@Resolver(() => GroupMembershipModel)
export class GroupMembershipResolver {
  constructor(
    private readonly groupMembershipRepo: GroupMembershipRepository,
    private readonly userRepo: UserRepository,
    private readonly groupRepo: GroupRepository
  ) {}

  @ResolveField(() => UserModel, {nullable: true})
  user(
    @Parent() groupMembershipModel: GroupMembershipModel
  ): Promise<UserModel> {
    return this.userRepo.findOneOrFail({
      id: groupMembershipModel.userID,
    });
  }

  @ResolveField(() => GroupModel, {nullable: true})
  group(
    @Parent() groupMembershipModel: GroupMembershipModel
  ): Promise<GroupModel> {
    return this.groupRepo.findOneOrFail({id: groupMembershipModel.groupID});
  }

  @Query(() => [GroupMembershipModel!])
  async groupMemberships(
    @Args('filter') filter: GroupMembershipFilterManyInput
  ): Promise<GroupMembershipModel[]> {
    const matchingGroups = await this.groupMembershipRepo.find({
      where: {
        groupID: filter.groupIDs && In(filter.groupIDs),
        userID: filter.userIDs && In(filter.userIDs),
      },
      skip: filter.skip,
      take: filter.limit ?? 25,
    });
    return matchingGroups.map(GroupMembershipModel.fromEntity);
  }
}
