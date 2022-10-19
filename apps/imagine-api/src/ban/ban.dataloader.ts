import {In} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {BanEntity} from '../database/ban.entity';
import {BanRepository} from '../database/ban.repository';
import {BaseDataloaderService} from '../utility/base.dataloader';

@Injectable()
export class BanDataloaderService extends BaseDataloaderService<BanEntity> {
  constructor(private readonly banRepo: BanRepository) {
    super(async (ids: number[]) => {
      if (ids.length === 0) {
        return [];
      }

      return this.banRepo.find({
        id: In(ids),
      });
    });
  }
}
