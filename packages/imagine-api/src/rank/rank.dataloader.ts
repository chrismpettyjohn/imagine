import {In} from 'typeorm';
import {RankEntity} from './rank.entity';
import {Injectable} from '@nestjs/common';
import {RankRepository} from './rank.repository';
import {BaseDataloaderService} from '../utility/base.dataloader';

@Injectable()
export class RankDataloaderService extends BaseDataloaderService<RankEntity> {
  constructor(private readonly rankRepo: RankRepository) {
    super(async (ids: number[]) => {
      if (ids.length === 0) {
        return [];
      }

      return this.rankRepo.find({
        id: In(ids),
      });
    });
  }
}
