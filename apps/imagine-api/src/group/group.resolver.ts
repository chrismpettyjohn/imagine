import {In} from 'typeorm';
import {GroupModel} from './group.model';
import {UserModel} from '../user/user.model';
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

@Resolver(() => GroupModel)
export class GroupResolver {
  constructor(
    private readonly userRepo: UserRepository,
    private readonly groupRepo: GroupRepository
  ) {}

  @ResolveField(() => UserModel, {nullable: true})
  async user(@Parent() group: GroupModel): Promise<UserModel> {
    return this.userRepo.findOneOrFail({id: group.userID});
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
      take: filter.limit ?? 25,
    });
    return matchingGroups.map(GroupModel.fromEntity);
  }

  @Mutation(() => Boolean)
  async groupDelete(@Args('id') id: number) {
    await this.groupRepo.delete({id});
    return true;
  }
}
