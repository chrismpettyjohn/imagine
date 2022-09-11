import {omit} from 'lodash';
import {WordFilterArgs} from './word-filter.args';
import {WordFilterModel} from './word-filter.model';
import {PubSub} from 'graphql-subscriptions';
import {Inject, forwardRef} from '@nestjs/common';
import {UserEntity} from '../database/user.entity';
import {GetUser} from '../session/get-user.decorator';
import {WordFilterEntity} from '../database/word-filter.entity';
import {UserRepository} from '../database/user.repository';
import {HasSession} from '../session/has-session.decorator';
import {WordFilterDataloaderService} from './word-filter.dataloader';
import {WordFilterRepository} from '../database/word-filter.repository';
import {
  WordFilterCreateInput,
  WordFilterUpdateInput,
} from './word-filter.input';
import {Args, Mutation, Query, Resolver, Subscription} from '@nestjs/graphql';

const pubSub = new PubSub();

@Resolver(() => WordFilterModel)
export class WordFilterResolver {
  constructor(
    @Inject(forwardRef(() => UserRepository))
    private readonly userRepo: UserRepository,
    private readonly wordFilterRepo: WordFilterRepository,
    private readonly wordFilterDataloaderService: WordFilterDataloaderService
  ) {}

  @Query(() => WordFilterModel)
  async wordFilter(@Args('id') id: number): Promise<WordFilterEntity> {
    return this.wordFilterDataloaderService.loadById(id);
  }

  @Query(() => [WordFilterModel])
  wordFilters(
    @Args() wordFilterArgs: WordFilterArgs
  ): Promise<WordFilterEntity[]> {
    return this.wordFilterRepo.find(
      omit(wordFilterArgs, 'other'),
      wordFilterArgs.other
    );
  }

  @Mutation(() => WordFilterModel)
  @HasSession()
  async wordFilterCreate(
    @Args('newWordFilter') wordFilterCreateInput: WordFilterCreateInput,
    @GetUser() user: UserEntity
  ): Promise<WordFilterEntity> {
    const newWordFilter = await this.wordFilterRepo.create({
      ...wordFilterCreateInput,
      addedByUserID: user.id!,
    });
    pubSub.publish('wordFilterCreated', {wordFilterCreated: newWordFilter});
    return newWordFilter;
  }

  @Subscription(() => WordFilterModel)
  wordFilterCreated() {
    return pubSub.asyncIterator('wordFilterCreated');
  }

  @Mutation(() => Boolean)
  async wordFilterUpdate(
    @Args('id') id: number,
    @Args('wordFilterChanges') wordFilterChanges: WordFilterUpdateInput
  ) {
    await this.wordFilterRepo.update({id}, wordFilterChanges);
    await this.wordFilterDataloaderService.clearByID(id);
    return true;
  }

  @Mutation(() => Boolean)
  async wordFilterDelete(@Args('id') id: number) {
    const deletedWordFilter = await this.wordFilterRepo.findOneOrFail({id});
    pubSub.publish('wordFilterDeleted', {wordFilterDeleted: deletedWordFilter});
    await this.wordFilterRepo.delete({id});
    await this.wordFilterDataloaderService.clearByID(id);
    return true;
  }

  @Subscription(() => WordFilterModel)
  wordFilterDeleted() {
    return pubSub.asyncIterator('wordFilterDeleted');
  }
}
