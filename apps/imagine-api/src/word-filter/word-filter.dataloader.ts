import {In} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {WordFilterEntity} from '../database/word-filter.entity';
import {BaseDataloaderService} from '../utility/base.dataloader';
import {WordFilterRepository} from '../database/word-filter.repository';

@Injectable()
export class WordFilterDataloaderService extends BaseDataloaderService<WordFilterEntity> {
  constructor(private readonly wordFilterRepo: WordFilterRepository) {
    super(async (ids: number[]) => {
      if (ids.length === 0) {
        return [];
      }

      return this.wordFilterRepo._find({
        id: In(ids),
      });
    });
  }
}
