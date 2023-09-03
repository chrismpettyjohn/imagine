import {omit} from 'lodash';
import {ArticleArgs} from './article.args';
import {ArticleModel} from './article.model';
import {PubSub} from 'graphql-subscriptions';
import {Inject, forwardRef} from '@nestjs/common';
import {UserEntity} from '../database/user.entity';
import {GetUser} from '../session/get-user.decorator';
import {HasScope} from '../session/has-scope.decorator';
import {ArticleEntity} from '../database/article.entity';
import {UserRepository} from '../database/user.repository';
import {ArticleDataloaderService} from './article.dataloader';
import {ArticleRepository} from '../database/article.repository';
import {ArticleCreateInput, ArticleUpdateInput} from './article.input';
import {
  Args,
  Mutation,
  Query,
  Resolver,
  Subscription,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import {UserModel} from '../user/user.model';
import {ArticleCommentModel} from './article-comment/article-comment.model';
import {ArticleCommentRepository} from '../database/article-comment.repository';

const pubSub = new PubSub();

@Resolver(() => ArticleModel)
export class ArticleResolver {
  constructor(
    @Inject(forwardRef(() => UserRepository))
    private readonly userRepo: UserRepository,
    private readonly articleRepo: ArticleRepository,
    private readonly articleCommentRepo: ArticleCommentRepository,
    private readonly articleDataloaderService: ArticleDataloaderService
  ) {}

  @ResolveField('user', () => UserModel)
  getUser(@Parent() {userID}: ArticleEntity): Promise<UserModel> {
    return this.userRepo.findOneOrFail({id: userID});
  }

  @ResolveField('comments', () => [ArticleCommentModel])
  getComments(@Parent() {id}: ArticleEntity): Promise<ArticleCommentModel[]> {
    return this.articleCommentRepo._find({
      articleID: id,
    });
  }

  @Query(() => ArticleModel)
  async article(@Args('id') id: number): Promise<ArticleEntity> {
    return this.articleDataloaderService.loadById(id);
  }

  @Query(() => [ArticleModel])
  articles(@Args() articleArgs: ArticleArgs): Promise<ArticleEntity[]> {
    return this.articleRepo._find(
      omit(articleArgs, 'other'),
      articleArgs.other
    );
  }

  @Mutation(() => ArticleModel)
  @HasScope('manageArticles')
  async articleCreate(
    @Args('newArticle') articleCreateInput: ArticleCreateInput,
    @GetUser() user: UserEntity
  ): Promise<ArticleEntity> {
    const createdAt = new Date().toISOString();
    const newArticle = await this.articleRepo.create({
      ...articleCreateInput,
      userID: user.id!,
      createdAt,
      updatedAt: createdAt,
    });
    pubSub.publish('articleCreated', {articleCreated: newArticle});
    return newArticle;
  }

  @Subscription(() => ArticleModel)
  articleCreated() {
    return pubSub.asyncIterator('articleCreated');
  }

  @Mutation(() => Boolean)
  @HasScope('manageArticles')
  async articleUpdate(
    @Args('id') id: number,
    @Args('articleChanges') articleChanges: ArticleUpdateInput
  ) {
    await this.articleRepo.update({id}, articleChanges);
    this.articleDataloaderService.clearByID(id);
    return true;
  }

  @Mutation(() => Boolean)
  @HasScope('manageArticles')
  async articleDelete(@Args('id') id: number) {
    const deletedArticle = await this.articleRepo.findOneOrFail({id});
    pubSub.publish('articleDeleted', {articleDeleted: deletedArticle});
    await this.articleRepo.delete({id});
    this.articleDataloaderService.clearByID(id);
    return true;
  }

  @Subscription(() => ArticleModel)
  articleDeleted() {
    return pubSub.asyncIterator('articleDeleted');
  }
}
