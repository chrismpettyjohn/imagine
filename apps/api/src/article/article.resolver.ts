import {omit} from 'lodash';
import {ArticleArgs} from './article.args';
import {ArticleModel} from './article.model';
import {PubSub} from 'graphql-subscriptions';
import {Inject, forwardRef} from '@nestjs/common';
import {UserEntity} from '../database/user.entity';
import {GetUser} from '../session/get-user.decorator';
import {ArticleEntity} from '../database/article.entity';
import {UserRepository} from '../database/user.repository';
import {HasSession} from '../session/has-session.decorator';
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

const pubSub = new PubSub();

@Resolver(() => ArticleModel)
export class ArticleResolver {
  constructor(
    @Inject(forwardRef(() => UserRepository))
    private readonly userRepo: UserRepository,
    private readonly articleRepo: ArticleRepository,
    private readonly articleDataloaderService: ArticleDataloaderService
  ) {}

  @ResolveField('user', () => UserModel)
  async getUser(@Parent() {userID}: ArticleEntity): Promise<UserModel> {
    console.log(userID);
    return this.userRepo.findOneOrFail({id: userID});
  }

  @Query(() => ArticleModel)
  async article(@Args('id') id: number): Promise<ArticleEntity> {
    return this.articleDataloaderService.loadById(id);
  }

  @Query(() => [ArticleModel])
  articles(@Args() articleArgs: ArticleArgs): Promise<ArticleEntity[]> {
    return this.articleRepo.find(omit(articleArgs, 'other'), articleArgs.other);
  }

  @Mutation(() => ArticleModel)
  @HasSession()
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
  async articleUpdate(
    @Args('id') id: number,
    @Args('articleChanges') articleChanges: ArticleUpdateInput
  ) {
    await this.articleRepo.update({id}, articleChanges);
    return true;
  }

  @Mutation(() => Boolean)
  async articleDelete(@Args('id') id: number) {
    const deletedArticle = await this.articleRepo.findOneOrFail({id});
    pubSub.publish('articleDeleted', {articleDeleted: deletedArticle});
    await this.articleRepo.delete({id});
    return true;
  }

  @Subscription(() => ArticleModel)
  articleDeleted() {
    return pubSub.asyncIterator('articleDeleted');
  }
}
