import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {ConfigEntity} from './config.entity';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from '../utility/base.repository';

@Injectable()
export class ConfigRepository extends BaseRepository<ConfigEntity> {
  constructor(
    @InjectRepository(ConfigEntity) configRepo: Repository<ConfigEntity>
  ) {
    super(configRepo);
  }
}
