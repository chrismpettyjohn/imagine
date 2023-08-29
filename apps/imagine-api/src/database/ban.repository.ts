import {Repository} from 'typeorm';
import {BanEntity} from './ban.entity';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from '../utility/base.repository';

@Injectable()
export class BanRepository extends BaseRepository<BanEntity> {
  constructor(@InjectRepository(BanEntity) banRepo: Repository<BanEntity>) {
    super(banRepo);
  }
}
