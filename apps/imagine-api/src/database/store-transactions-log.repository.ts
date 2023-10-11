import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from '../utility/base.repository';
import {StoreTransactionLogEntity} from './store-transactions-log.entity';

@Injectable()
export class StoreTransactionLogRepository extends BaseRepository<StoreTransactionLogEntity> {
  constructor(
    @InjectRepository(StoreTransactionLogEntity)
    storeTransactionLogRepo: Repository<StoreTransactionLogEntity>
  ) {
    super(storeTransactionLogRepo);
  }
}
