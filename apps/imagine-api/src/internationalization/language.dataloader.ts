import { In } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { LanguageEntity } from '../database/language.entity';
import { BaseDataloaderService } from '../utility/base.dataloader';
import { LanguageRepository } from '../database/language.repository';

@Injectable()
export class LanguageDataloaderService extends BaseDataloaderService<LanguageEntity> {
  constructor(private readonly languageRepo: LanguageRepository) {
    super(async (ids: number[]) => {
      if (ids.length === 0) {
        return [];
      }

      return this.languageRepo._find({
        id: In(ids),
      });
    });
  }
}
