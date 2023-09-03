import {PubSub} from 'graphql-subscriptions';
import {LanguageModel} from './language.model';
import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import {LanguageEntity} from '../database/language.entity';
import {LanguageDataloaderService} from './language.dataloader';
import {LanguageRepository} from '../database/language.repository';
import {LanguageInput} from './language.input';

const pubSub = new PubSub();

@Resolver(() => LanguageModel)
export class LanguageResolver {
  constructor(
    private readonly languageRepo: LanguageRepository,
    private readonly languageDataloaderService: LanguageDataloaderService
  ) {}

  @Query(() => LanguageModel)
  async language(@Args('id') id: number): Promise<LanguageEntity> {
    return this.languageDataloaderService.loadById(id);
  }

  @Query(() => [LanguageModel])
  languages(): Promise<LanguageEntity[]> {
    return this.languageRepo._find();
  }

  @Mutation(() => LanguageModel)
  languageCreate(@Args('input') input: LanguageInput): Promise<LanguageEntity> {
    return this.languageRepo.create({
      ...input,
      hidden: input.hidden ? 1 : 0,
      createdAt: new Date().toISOString(),
    });
  }

  @Mutation(() => LanguageModel)
  async languageUpdate(
    @Args('id') languageID: number,
    @Args('input') input: LanguageInput
  ): Promise<LanguageEntity> {
    await this.languageRepo.update(
      {id: languageID},
      {
        ...input,
        hidden: input.hidden ? 1 : 0,
      }
    );
    return this.languageRepo.findOneOrFail({id: languageID});
  }

  @Mutation(() => Boolean)
  async languageDelete(@Args('id') languageID: number): Promise<Boolean> {
    await this.languageRepo.delete({id: languageID});
    return true;
  }
}
