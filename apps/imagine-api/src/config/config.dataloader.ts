import {In} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {ConfigEntity} from '../database/config.entity';
import {ConfigRepository} from '../database/config.repository';
import {BaseDataloaderService} from '../utility/base.dataloader';

@Injectable()
export class ConfigDataloaderService extends BaseDataloaderService<ConfigEntity> {
  constructor(private readonly configRepo: ConfigRepository) {
    super(async (ids: number[]) => {
      if (ids.length === 0) {
        return [];
      }

      return this.configRepo.find({
        id: In(ids),
      });
    });
  }
}
