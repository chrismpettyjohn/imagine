import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from '../utility/base.repository';
import {UserTradeLogEntity} from './user-trade-log.entity';

@Injectable()
export class UserTradeLogRepository extends BaseRepository<UserTradeLogEntity> {
  constructor(
    @InjectRepository(UserTradeLogEntity)
    roomTradeLogRepo: Repository<UserTradeLogEntity>
  ) {
    super(roomTradeLogRepo);
  }
}
