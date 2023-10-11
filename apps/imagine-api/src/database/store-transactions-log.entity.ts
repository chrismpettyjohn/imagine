import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('imagine_store_transaction_log')
export class StoreTransactionLogEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'store_transaction_id', type: 'int'})
  storeTransactionID!: number;

  @Column()
  key!: string;

  @Column({type: 'text'})
  note!: string;

  @Column({name: 'created_at', type: 'int'})
  createdAt!: number;
}
