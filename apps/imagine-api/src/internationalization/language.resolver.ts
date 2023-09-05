import {LanguageModel} from './language.model';
import {LanguageInput} from './language.input';
import {LanguageEntity} from '../database/language.entity';
import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import {LanguageRepository} from '../database/language.repository';

@Resolver(() => LanguageModel)
export class LanguageResolver {
  constructor(private readonly languageRepo: LanguageRepository) {}

  @Query(() => LanguageModel)
  async language(@Args('id') id: number): Promise<LanguageEntity> {
    return this.languageRepo.findOneOrFail({id});
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
