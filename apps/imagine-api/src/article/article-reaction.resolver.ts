import {In} from 'typeorm';
import {UserEntity} from '../database/user.entity';
import {ArticleReactionModel} from './article-reaction.model';
import {HasSession} from '../session/has-session.decorator';
import {ArticleReactionService} from './article-reaction.service';
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import {ArticleReactionDataloaderService} from './article-reaction.dataloader';
import {
  ArticleReactionCreateInput,
  ArticleReactionFilterManyInput,
  ArticleReactionFilterOneInput,
} from './article-reaction.input';
import {UnauthorizedException} from '@nestjs/common';
import {UserRepository} from '../database/user.repository';
import {UserModel} from '../user/user.model';
import {GetUser} from '../session/get-user.decorator';

@Resolver(() => ArticleReactionModel)
export class ArticleReactionResolver {
  constructor(
    private readonly userRepo: UserRepository,
    private readonly articleReactionService: ArticleReactionService,
    private readonly articleReactionDataloaderService: ArticleReactionDataloaderService
  ) {}

  @ResolveField(() => UserModel)
  user(@Parent() articleReaction: ArticleReactionModel): Promise<UserModel> {
    return this.userRepo.findOneOrFail({id: articleReaction.userID});
  }

  @Query(() => ArticleReactionModel)
  async articleReaction(
    @Args('filter') filter: ArticleReactionFilterOneInput
  ): Promise<ArticleReactionModel> {
    return this.articleReactionDataloaderService.loadById(filter.id);
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
    await this.articleReactionDataloaderService.clearByID(id);
    return true;
  }
}
