import { omit } from 'lodash';
import { PubSub } from 'graphql-subscriptions';
import { Inject, forwardRef } from '@nestjs/common';
import { UserEntity } from '../../database/user.entity';
import { GetUser } from '../../session/get-user.decorator';
import { ArticleCommentArgs } from './article-comment.args';
import { ArticleCommentModel } from './article-comment.model';
import { UserRepository } from '../../database/user.repository';
import { HasSession } from '../../session/has-session.decorator';
import { ArticleCommentEntity } from '../../database/article-comment.entity';
import { ArticleCommentDataloaderService } from './article-comment.dataloader';
import { ArticleCommentRepository } from '../../database/article-comment.repository';
import {
  ArticleCommentCreateInput,
  ArticleCommentUpdateInput,
} from './article-comment.input';
import {
  Args,
  Mutation,
  Query,
  Resolver,
  Subscription,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { UserModel } from '../../user/user.model';
import { ArticleEntity } from '../../database/article.entity';
import { ArticleModel } from '../article.model';
import { ArticleRepository } from '../../database/article.repository';

const pubSub = new PubSub();

@Resolver(() => ArticleCommentModel)
export class ArticleCommentResolver {
  constructor(
    @Inject(forwardRef(() => UserRepository))
    private readonly userRepo: UserRepository,
    private readonly articleRepo: ArticleRepository,
    private readonly articleCommentRepo: ArticleCommentRepository,
    private readonly articleCommentDataloader: ArticleCommentDataloaderService
  ) { }

  @ResolveField('user', () => UserModel)
  getUser(@Parent() { userID }: ArticleCommentEntity): Promise<UserModel> {
    return this.userRepo.findOneOrFail({ id: userID });
  }

  @ResolveField('article', () => ArticleModel)
  getArticle(
    @Parent() { articleID }: ArticleCommentEntity
  ): Promise<ArticleModel> {
    return this.articleRepo.findOneOrFail({ id: articleID });
  }

  @Query(() => ArticleCommentModel)
  async articleComment(@Args('id') id: number): Promise<ArticleCommentEntity> {
    return this.articleCommentDataloader.loadById(id);
  }

  @Query(() => [ArticleCommentModel])
  articleComments(
    @Args() articleCommentArgs: ArticleCommentArgs
  ): Promise<ArticleCommentEntity[]> {
    return this.articleCommentRepo._find(
      omit(articleCommentArgs, 'other'),
      articleCommentArgs.other
    );
  }

  @Mutation(() => ArticleCommentModel)
  @HasSession()
  async articleCommentCreate(
    @Args('newArticleComment')
    articleCommentCreateInput: ArticleCommentCreateInput,
    @GetUser() user: UserEntity
  ): Promise<ArticleCommentEntity> {
    const newArticleComment = await this.articleCommentRepo.create({
      ...articleCommentCreateInput,
      userID: user.id!,
    });
    pubSub.publish('articleCommentCreated', {
      articleCommentCreated: newArticleComment,
    });
    return newArticleComment;
  }

  @Subscription(() => ArticleCommentModel)
  articleCommentCreated() {
    return pubSub.asyncIterator('articleCommentCreated');
  }

  @Mutation(() => Boolean)
  async articleCommentUpdate(
    @Args('id') id: number,
    @Args('articleChanges') articleCommentUpdateInput: ArticleCommentUpdateInput
  ) {
    await this.articleCommentRepo.update({ id }, articleCommentUpdateInput);
    return true;
  }

  @Mutation(() => Boolean)
  async articleCommentDelete(@Args('id') id: number) {
    const deletedArticleComment = await this.articleCommentRepo.findOneOrFail({
      id,
    });
    pubSub.publish('articleCommentDeleted', {
      articleCommentDeleted: deletedArticleComment,
    });
    await this.articleCommentRepo.delete({ id });
    return true;
  }

  @Subscription(() => ArticleCommentModel)
  articleCommentDeleted() {
    return pubSub.asyncIterator('articleCommentDeleted');
  }
}
