import {ArticleModel} from './article.model';
import {UserModel} from '../user/user.model';
import {Inject, forwardRef} from '@nestjs/common';
import {UserEntity} from '../database/user.entity';
import {GetUser} from '../session/get-user.decorator';
import {HasScope} from '../session/has-scope.decorator';
import {ArticleEntity} from '../database/article.entity';
import {UserRepository} from '../database/user.repository';
import {ArticleRepository} from '../database/article.repository';
import {
  ArticleCreateInput,
  ArticleFilterManyInput,
  ArticleFilterOneInput,
  ArticleUpdateInput,
} from './article.input';
import {
  Args,
  Mutation,
  Query,
  Resolver,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import {In} from 'typeorm';

@Resolver(() => ArticleModel)
export class ArticleResolver {
  constructor(
    @Inject(forwardRef(() => UserRepository))
    private readonly userRepo: UserRepository,
    private readonly articleRepo: ArticleRepository
  ) {}

  @ResolveField('user', () => UserModel, {nullable: true})
  getUser(@Parent() {userID}: ArticleEntity): Promise<UserModel | null> {
    return this.userRepo.findOne({
      where: {
        id: userID,
      },
    });
  }

  @Query(() => ArticleModel)
  async article(
    @Args('filter', {type: () => ArticleFilterOneInput})
    filter: ArticleFilterOneInput
  ): Promise<ArticleModel> {
    const matchingArticle = await this.articleRepo.findOneOrFail({
      id: filter.id,
    });
    return ArticleModel.fromEntity(matchingArticle);
  }

  @Query(() => [ArticleModel])
  async articles(
    @Args('filter', {type: () => ArticleFilterManyInput})
    filter: ArticleFilterManyInput
  ): Promise<ArticleModel[]> {
    const matchingArticles = await this.articleRepo.find({
      where: {
        id: filter.ids && In(filter.ids),
        userID: filter.userIDs && In(filter.userIDs),
      },
      skip: filter.skip,
      take: filter.limit ?? 25,
    });
    return matchingArticles.map(ArticleModel.fromEntity);
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
    return newArticle;
  }

  @Mutation(() => Boolean)
  @HasScope('manageArticles')
  async articleUpdate(
    @Args('id') id: number,
    @Args('articleChanges') articleChanges: ArticleUpdateInput
  ) {
    await this.articleRepo.update({id}, articleChanges);
    return true;
  }

  @Mutation(() => Boolean)
  @HasScope('manageArticles')
  async articleDelete(@Args('id') id: number) {
    await this.articleRepo.delete({id});
    return true;
  }
}
