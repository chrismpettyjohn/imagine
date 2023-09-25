import {LanguageModel} from './language.model';
import {LanguageInput} from './language.input';
import {HasScope} from '../session/has-scope.decorator';
import {LanguageEntity} from '../database/language.entity';
import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import {LanguageRepository} from '../database/language.repository';

@Resolver(() => LanguageModel)
export class LanguageResolver {
  constructor(private readonly languageRepo: LanguageRepository) {}

  @Query(() => LanguageModel)
  @HasScope('manageLanguages')
  async language(@Args('id') id: number): Promise<LanguageEntity> {
    return this.languageRepo.findOneOrFail({id});
  }

  @Query(() => [LanguageModel])
  @HasScope('manageLanguages')
  languages(): Promise<LanguageEntity[]> {
    return this.languageRepo._find();
  }

  @Mutation(() => LanguageModel)
  @HasScope('manageLanguages')
  languageCreate(@Args('input') input: LanguageInput): Promise<LanguageEntity> {
    return this.languageRepo.create({
      ...input,
      hidden: input.hidden ? 1 : 0,
      createdAt: new Date().toISOString(),
    });
  }

  @Mutation(() => LanguageModel)
  @HasScope('manageLanguages')
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
  @HasScope('manageLanguages')
  async languageDelete(@Args('id') languageID: number): Promise<Boolean> {
    await this.languageRepo.delete({id: languageID});
    return true;
  }
}
