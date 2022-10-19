import {In} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {RankEntity} from '../database/rank.entity';
import {RankRepository} from '../database/rank.repository';
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
