import {PubSub} from 'graphql-subscriptions';
import {LanguagePhraseInput} from './language-phrase.input';
import {LanguagePhraseModel} from './language-phrase.model';
import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import {LanguagePhraseEntity} from '../database/language-phrase.entity';
import {LanguagePhraseRepository} from '../database/language-phrase.repository';

const pubSub = new PubSub();

@Resolver(() => LanguagePhraseModel)
export class LanguagePhraseResolver {
  constructor(private readonly languagePhraseRepo: LanguagePhraseRepository) {}

  @Query(() => LanguagePhraseModel)
  async languagePhrase(@Args('id') id: number): Promise<LanguagePhraseEntity> {
    return this.languagePhraseRepo.findOneOrFail({id});
  }

  @Query(() => [LanguagePhraseModel])
  languagePhrases(): Promise<LanguagePhraseEntity[]> {
    return this.languagePhraseRepo._find();
  }

  @Mutation(() => LanguagePhraseModel)
  languagePhraseCreate(
    @Args('input') input: LanguagePhraseInput
  ): Promise<LanguagePhraseEntity> {
    return this.languagePhraseRepo.create({
      ...input,
      createdAt: new Date().toISOString(),
    });
  }

  @Mutation(() => LanguagePhraseModel)
  async languagePhraseUpdate(
    @Args('id') languagePhraseID: number,
    @Args('input') input: LanguagePhraseInput
  ): Promise<LanguagePhraseEntity> {
    await this.languagePhraseRepo.update({id: languagePhraseID}, input);
    return this.languagePhraseRepo.findOneOrFail({id: languagePhraseID});
  }

  @Mutation(() => Boolean)
  async languagePhraseDelete(@Args('id') languageID: number): Promise<Boolean> {
    await this.languagePhraseRepo.delete({id: languageID});
    return true;
  }
}
