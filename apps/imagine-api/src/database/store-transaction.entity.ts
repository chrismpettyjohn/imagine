import {Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('imagine_store_transaction')
export class StoreTransactionEntity {
  @PrimaryGeneratedColumn()
  id?: number;
}
