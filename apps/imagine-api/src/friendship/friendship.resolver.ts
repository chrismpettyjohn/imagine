import {FriendshipModel} from './friendship.model';
import {Resolver, Query, Args, ResolveField, Parent} from '@nestjs/graphql';
import {UserRepository} from '../database/user.repository';
import {FriendshipFilterManyInput} from './friendship.input';
import {FriendshipRepository} from '../database/friendship.repository';
import {UserModel} from '../user/user.model';

@Resolver(() => FriendshipModel)
export class FriendshipResolver {
  constructor(
    private readonly friendshipRepo: FriendshipRepository,
    private readonly userRepo: UserRepository
  ) {}

  @ResolveField(() => UserModel, {nullable: true})
  friend(@Parent() parent: FriendshipModel): Promise<UserModel> {
    return this.userRepo.findOneOrFail({id: parent.friendID});
  }

  @Query(() => [FriendshipModel])
  async friendships(
    @Args('filter') filter: FriendshipFilterManyInput
  ): Promise<FriendshipModel[]> {
    const matchingFriendships = await this.friendshipRepo.find({
      where: {
        userID: filter.userID,
      },
      take: filter.limit ?? 25,
    });
    return matchingFriendships.map(FriendshipModel.fromEntity);
  }
}
