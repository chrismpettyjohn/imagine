import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import {LanguagePhraseTranslationModel} from './language-phrase-translation.model';
import {LanguagePhraseTranslationInput} from './language-phrase-translation.input';
import {LanguagePhraseTranslationEntity} from '../database/language-phrase-translation.entity';
import {LanguagePhraseTranslationRepository} from '../database/language-phrase-translation.repository';

@Resolver(() => LanguagePhraseTranslationModel)
export class LanguagePhraseResolver {
  constructor(
    private readonly languagePhraseTranslationRepo: LanguagePhraseTranslationRepository
  ) {}

  @Query(() => LanguagePhraseTranslationModel)
  async languagePhraseTranslation(
    @Args('id') id: number
  ): Promise<LanguagePhraseTranslationEntity> {
    return this.languagePhraseTranslationRepo.findOneOrFail({id});
  }

  @Query(() => [LanguagePhraseTranslationModel])
  languagePhraseTranslations(): Promise<LanguagePhraseTranslationEntity[]> {
    return this.languagePhraseTranslationRepo._find();
  }

  @Mutation(() => LanguagePhraseTranslationModel)
  languagePhraseTranslationCreate(
    @Args('input') input: LanguagePhraseTranslationInput
  ): Promise<LanguagePhraseTranslationEntity> {
    return this.languagePhraseTranslationRepo.create({
      ...input,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
  }

  @Mutation(() => LanguagePhraseTranslationModel)
  async languagePhraseTranslationUpdate(
    @Args('id') languagePhraseTranslationID: number,
    @Args('input') input: LanguagePhraseTranslationInput
  ): Promise<LanguagePhraseTranslationEntity> {
    await this.languagePhraseTranslationRepo.update(
      {id: languagePhraseTranslationID},
      {
        ...input,
        updatedAt: new Date().toISOString(),
      }
    );
    return this.languagePhraseTranslationRepo.findOneOrFail({
      id: languagePhraseTranslationID,
    });
  }

  @Mutation(() => Boolean)
  async languagePhraseTranslationDelete(
    @Args('id') languageID: number
  ): Promise<Boolean> {
    await this.languagePhraseTranslationRepo.delete({id: languageID});
    return true;
  }
}
