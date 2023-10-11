import {Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('imagine_store_transaction_log')
export class StoreTransactionLogEntity {
  @PrimaryGeneratedColumn()
  id?: number;
}
