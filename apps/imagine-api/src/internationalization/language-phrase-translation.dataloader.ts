import { In } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { BaseDataloaderService } from '../utility/base.dataloader';
import { LanguagePhraseTranslationEntity } from '../database/language-phrase-translation.entity';
import { LanguagePhraseTranslationRepository } from '../database/language-phrase-translation.repository';

@Injectable()
export class LanguagePhraseTranslationDataloaderService extends BaseDataloaderService<LanguagePhraseTranslationEntity> {
  constructor(
    private readonly languagePhraseTranslationRepo: LanguagePhraseTranslationRepository
  ) {
    super(async (ids: number[]) => {
      if (ids.length === 0) {
        return [];
      }

      return this.languagePhraseTranslationRepo._find({
        id: In(ids),
      });
    });
  }
}
