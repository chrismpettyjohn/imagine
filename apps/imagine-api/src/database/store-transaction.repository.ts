import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from '../utility/base.repository';
import {StoreTransactionEntity} from './store-transaction.entity';

@Injectable()
export class StoreTransactionRepository extends BaseRepository<StoreTransactionEntity> {
  constructor(
    @InjectRepository(StoreTransactionEntity)
    storeTransactionRepo: Repository<StoreTransactionEntity>
  ) {
    super(storeTransactionRepo);
  }
}
