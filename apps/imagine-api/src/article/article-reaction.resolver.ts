import {In} from 'typeorm';
import {UserModel} from '../user/user.model';
import {UserEntity} from '../database/user.entity';
import {UnauthorizedException} from '@nestjs/common';
import {GetUser} from '../session/get-user.decorator';
import {UserRepository} from '../database/user.repository';
import {HasSession} from '../session/has-session.decorator';
import {ArticleReactionModel} from './article-reaction.model';
import {ArticleReactionService} from './article-reaction.service';
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import {
  ArticleReactionCreateInput,
  ArticleReactionFilterManyInput,
  ArticleReactionFilterOneInput,
} from './article-reaction.input';

@Resolver(() => ArticleReactionModel)
export class ArticleReactionResolver {
  constructor(
    private readonly userRepo: UserRepository,
    private readonly articleReactionService: ArticleReactionService
  ) {}

  @ResolveField(() => UserModel, {nullable: true})
  user(@Parent() articleReaction: ArticleReactionModel): Promise<UserModel> {
    return this.userRepo.findOneOrFail({id: articleReaction.userID});
  }

  @Query(() => ArticleReactionModel)
  async articleReaction(
    @Args('filter') filter: ArticleReactionFilterOneInput
  ): Promise<ArticleReactionModel> {
    return this.articleReactionService.findOne({id: filter.id});
  }

  @Query(() => [ArticleReactionModel])
  articleReactions(
    @Args('filter', {
      type: () => ArticleReactionFilterManyInput,
      nullable: true,
    })
    filter: ArticleReactionFilterManyInput
  ): Promise<ArticleReactionModel[]> {
    return this.articleReactionService.findMany({
      id: filter?.ids && In(filter.ids),
      userID: filter?.userIDs && In(filter.userIDs),
    });
  }

  @Mutation(() => ArticleReactionModel)
  @HasSession()
  async articleReactionUpdate(
    @Args('filter', {type: () => ArticleReactionFilterOneInput})
    filter: ArticleReactionFilterOneInput,
    @Args('input', {type: () => ArticleReactionCreateInput})
    input: ArticleReactionCreateInput,
    @GetUser() session: UserEntity
  ): Promise<ArticleReactionModel> {
    const matchingArticleReaction = await this.articleReactionService.findOne({
      id: filter.id,
    });
    const userOwnsArticleReaction =
      matchingArticleReaction.userID === session.id!;
    if (!userOwnsArticleReaction) {
      throw new UnauthorizedException();
    }
    return this.articleReactionService.create({
      userID: session.id!,
      reaction: input.reaction,
      resourceID: input.articleID,
    });
  }

  @Mutation(() => Boolean)
  async articleReactionDelete(
    @Args('id') id: number,
    @GetUser() session: UserEntity
  ) {
    const matchingArticleReaction = await this.articleReactionService.findOne({
      id,
    });
    const userOwnsArticleReaction =
      matchingArticleReaction.userID === session.id!;
    if (!userOwnsArticleReaction) {
      throw new UnauthorizedException();
    }
    await this.articleReactionService.delete(id);
    return true;
  }
}
