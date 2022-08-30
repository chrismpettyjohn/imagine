import {In} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {BadgeEntity} from '../database/badge.entity';
import {BadgeRepository} from '../database/badge.repository';
import {BaseDataloaderService} from '../utility/base.dataloader';

@Injectable()
export class BadgeDataloaderService extends BaseDataloaderService<BadgeEntity> {
  constructor(private readonly rankRepo: BadgeRepository) {
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
