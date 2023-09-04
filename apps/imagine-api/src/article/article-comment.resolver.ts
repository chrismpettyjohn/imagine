import {In} from 'typeorm';
import {UserModel} from '../user/user.model';
import {UserEntity} from '../database/user.entity';
import {UnauthorizedException} from '@nestjs/common';
import {ArticleCommentModel} from './article-comment.model';
import {ArticleReactionModel} from './article-reaction.model';
import {HasSession} from '../session/has-session.decorator';
import {ArticleCommentService} from './article-comment.service';
import {UserRepository} from '../database/user.repository';
import {ArticleCommentDataloaderService} from './article-comment.dataloader';
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import {
  ArticleCommentCreateInput,
  ArticleCommentFilterManyInput,
  ArticleCommentFilterOneInput,
} from './article-comment.input';
import {GetUser} from '../session/get-user.decorator';

@Resolver(() => ArticleCommentModel)
export class ArticleCommentResolver {
  constructor(
    private readonly userRepo: UserRepository,
    private readonly articleCommentService: ArticleCommentService,
    private readonly articleCommentDataloaderService: ArticleCommentDataloaderService
  ) {}

  @ResolveField(() => UserModel)
  user(@Parent() articleReaction: ArticleReactionModel): Promise<UserModel> {
    return this.userRepo.findOneOrFail({id: articleReaction.userID});
  }

  @Query(() => ArticleCommentModel)
  async articleComment(
    @Args('filter') filter: ArticleCommentFilterOneInput
  ): Promise<ArticleCommentModel> {
    return this.articleCommentDataloaderService.loadById(filter.id);
  }

  @Query(() => [ArticleCommentModel])
  articleComments(
    @Args('filter', {type: () => ArticleCommentFilterManyInput, nullable: true})
    filter: ArticleCommentFilterManyInput
  ): Promise<ArticleCommentModel[]> {
    return this.articleCommentService.findMany({
      id: filter?.ids && In(filter.ids),
      userID: filter?.userIDs && In(filter.userIDs),
    });
  }

  @Mutation(() => ArticleCommentModel)
  @HasSession()
  async articleCommentCreate(
    @Args('input', {type: () => ArticleCommentCreateInput})
    input: ArticleCommentCreateInput,
    @GetUser() session: UserEntity
  ): Promise<ArticleCommentModel> {
    return this.articleCommentService.create({
      userID: session.id!,
      comment: input.comment,
      resourceID: input.articleID,
    });
  }

  @Mutation(() => ArticleCommentModel)
  @HasSession()
  async articleCommentUpdate(
    @Args('filter', {type: () => ArticleCommentFilterOneInput})
    filter: ArticleCommentFilterOneInput,
    @Args('input', {type: () => ArticleCommentCreateInput})
    input: ArticleCommentCreateInput,
    @GetUser() session: UserEntity
  ): Promise<ArticleCommentModel> {
    const matchingArticleComment = await this.articleCommentService.findOne({
      id: filter.id,
    });
    const userOwnsArticleComment =
      matchingArticleComment.userID === session.id!;
    if (!userOwnsArticleComment) {
      throw new UnauthorizedException();
    }
    await this.articleCommentService.update(filter.id, input.comment);
    return this.articleComment(filter);
  }

  @Mutation(() => Boolean)
  async articleCommentDelete(
    @Args('id') id: number,
    @GetUser() session: UserEntity
  ) {
    const matchingArticleComment = await this.articleCommentService.findOne({
      id,
    });
    const userOwnsArticleComment =
      matchingArticleComment.userID === session.id!;
    if (!userOwnsArticleComment) {
      throw new UnauthorizedException();
    }
    await this.articleCommentService.delete(id);
    await this.articleCommentDataloaderService.clearByID(id);
    return true;
  }
}
