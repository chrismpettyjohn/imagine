import {ILike, In} from 'typeorm';
import {RankModel} from './rank.model';
import {UserModel} from '../user/user.model';
import {Inject, forwardRef} from '@nestjs/common';
import {RankEntity} from '../database/rank.entity';
import {RankRepository} from '../database/rank.repository';
import {UserRepository} from '../database/user.repository';
import {
  RankCreateInput,
  RankFilterManyInput,
  RankFilterOneInput,
  RankUpdateInput,
} from './rank.input';
import {
  Args,
  Mutation,
  Query,
  Resolver,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import {HasScope} from '../session/has-scope.decorator';

@Resolver(() => RankModel)
export class RankResolver {
  constructor(
    @Inject(forwardRef(() => UserRepository))
    private readonly userRepo: UserRepository,
    private readonly rankRepo: RankRepository
  ) {}

  @ResolveField('users', () => [UserModel], {nullable: true})
  getUsers(@Parent() {id}: RankEntity): Promise<UserModel[]> {
    return this.userRepo._find({rankID: id});
  }

  @Query(() => RankModel)
  async rank(
    @Args('filter', {nullable: true, type: () => RankFilterOneInput})
    filter: RankFilterOneInput
  ): Promise<RankModel> {
    const matchingRank = await this.rankRepo.findOneOrFail({id: filter.id});
    return RankModel.fromEntity(matchingRank);
  }

  @Query(() => [RankModel])
  async ranks(
    @Args('filter') filter: RankFilterManyInput
  ): Promise<RankModel[]> {
    const matchingRanks = await this.rankRepo.find({
      where: {
        id: filter.ids && In(filter.ids),
        flags: filter.staffOnly && ILike('%"showOnStaffPage":true%'),
      },
      order: {
        id: 'DESC',
      },
      take: filter?.limit ?? 25,
    });
    return matchingRanks.map(RankModel.fromEntity);
  }

  @Mutation(() => RankModel)
  @HasScope('manageRanks')
  async rankCreate(
    @Args('newRank') rankCreateInput: RankCreateInput
  ): Promise<RankModel> {
    const newRank = await this.rankRepo.create({
      ...rankCreateInput,
    });
    return RankModel.fromEntity(newRank);
  }

  @Mutation(() => Boolean)
  @HasScope('manageRanks')
  async rankUpdate(
    @Args('filter', {nullable: true, type: () => RankFilterOneInput})
    filter: RankFilterOneInput,
    @Args('input', {type: () => RankUpdateInput}) input: RankUpdateInput
  ) {
    const currentRank = await this.rankRepo.findOneOrFail(filter);
    await this.rankRepo.update(filter, {
      ...input,
      scopes: {
        ...currentRank.scopes,
        ...input.scopes,
      },
      flags: {
        ...currentRank.flags,
        ...input.flags,
      },
    });
    return true;
  }

  @Mutation(() => Boolean)
  @HasScope('manageRanks')
  async rankDelete(@Args('id') id: number) {
    await this.rankRepo.delete({id});
    return true;
  }
}
