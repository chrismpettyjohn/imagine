import {In} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {BaseDataloaderService} from '../utility/base.dataloader';
import {LanguagePhraseEntity} from '../database/language-phrase.entity';
import {LanguagePhraseRepository} from '../database/language-phrase.repository';

@Injectable()
export class LanguagePhraseDataloaderService extends BaseDataloaderService<LanguagePhraseEntity> {
  constructor(private readonly languagePhraseRepo: LanguagePhraseRepository) {
    super(async (ids: number[]) => {
      if (ids.length === 0) {
        return [];
      }

      return this.languagePhraseRepo.find({
        id: In(ids),
      });
    });
  }
}
