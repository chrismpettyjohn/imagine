import {omit} from 'lodash';
import {WordFilterArgs} from './word-filter.args';
import {WordFilterModel} from './word-filter.model';
import {UserEntity} from '../database/user.entity';
import {GetUser} from '../session/get-user.decorator';
import {HasScope} from '../session/has-scope.decorator';
import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import {WordFilterEntity} from '../database/word-filter.entity';
import {WordFilterRepository} from '../database/word-filter.repository';
import {
  WordFilterCreateInput,
  WordFilterUpdateInput,
} from './word-filter.input';

@Resolver(() => WordFilterModel)
export class WordFilterResolver {
  constructor(private readonly wordFilterRepo: WordFilterRepository) {}

  @Query(() => WordFilterModel)
  @HasScope('manageWordFilter')
  async wordFilter(@Args('id') id: number): Promise<WordFilterEntity> {
    return this.wordFilterRepo.findOneOrFail({id});
  }

  @Query(() => [WordFilterModel])
  @HasScope('manageWordFilter')
  wordFilters(
    @Args() wordFilterArgs: WordFilterArgs
  ): Promise<WordFilterEntity[]> {
    return this.wordFilterRepo._find(
      omit(wordFilterArgs, 'other'),
      wordFilterArgs.other
    );
  }

  @Mutation(() => WordFilterModel)
  @HasScope('manageWordFilter')
  async wordFilterCreate(
    @Args('newWordFilter') wordFilterCreateInput: WordFilterCreateInput,
    @GetUser() user: UserEntity
  ): Promise<WordFilterEntity> {
    const newWordFilter = await this.wordFilterRepo.create({
      ...wordFilterCreateInput,
    });
    return newWordFilter;
  }

  @Mutation(() => Boolean)
  @HasScope('manageWordFilter')
  async wordFilterUpdate(
    @Args('id') id: number,
    @Args('wordFilterChanges') wordFilterChanges: WordFilterUpdateInput
  ) {
    await this.wordFilterRepo.update({id}, wordFilterChanges);
    return true;
  }

  @Mutation(() => Boolean)
  @HasScope('manageWordFilter')
  async wordFilterDelete(@Args('id') id: number) {
    await this.wordFilterRepo.delete({id});
    return true;
  }
}
