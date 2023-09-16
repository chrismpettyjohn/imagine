import {In} from 'typeorm';
import {RankModel} from './rank.model';
import {UserModel} from '../user/user.model';
import {Inject, forwardRef} from '@nestjs/common';
import {RankRepository} from '../database/rank.repository';
import {UserRepository} from '../database/user.repository';
import {RankEntity, RankSiteShowStaff} from '../database/rank.entity';
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
    @Args('filter', {type: () => RankFilterOneInput}) filter: RankFilterOneInput
  ): Promise<RankEntity> {
    return this.rankRepo.findOneOrFail({id: filter.id});
  }

  @Query(() => [RankModel])
  ranks(@Args('filter') filter: RankFilterManyInput): Promise<RankEntity[]> {
    return this.rankRepo.find({
      where: {
        id: filter.ids && In(filter.ids),
        siteShowStaff: filter.showStaffOnly ? RankSiteShowStaff.Yes : undefined,
      },
      order: {
        id: 'DESC',
      },
      take: filter.limit,
    });
  }

  @Mutation(() => RankModel)
  async rankCreate(
    @Args('newRank') rankCreateInput: RankCreateInput
  ): Promise<RankEntity> {
    const newRank = await this.rankRepo.create({
      ...rankCreateInput,
      siteShowStaff: rankCreateInput.siteShowStaff
        ? RankSiteShowStaff.Yes
        : RankSiteShowStaff.No,
    });
    return newRank;
  }

  @Mutation(() => Boolean)
  async rankUpdate(
    @Args('filter', {type: () => RankFilterOneInput})
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
    });
    return true;
  }

  @Mutation(() => Boolean)
  async rankDelete(@Args('id') id: number) {
    await this.rankRepo.delete({id});
    return true;
  }
}
