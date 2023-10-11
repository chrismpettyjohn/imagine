import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

export enum StoreTransactionStatus {
  PENDING = 'PENDING',
  FAILED = 'FAILED',
  CHARGED_BACK = 'CHARGED_BACK',
  SUCCESSFUL = 'SUCCESSFUL',
}

export enum StorePlatform {
  PAYPAL = 'PAYPAL',
}

@Entity('imagine_store_transaction')
export class StoreTransactionEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'store_package_id', type: 'int'})
  storePackageID!: number;

  @Column({name: 'user_id', type: 'int'})
  userID!: number;

  @Column({name: 'status', type: 'tinyint'})
  status!: StoreTransactionStatus;

  @Column({name: 'total_cost', type: 'decimal'})
  totalCost!: string;

  @Column()
  currency!: string;

  @Column({type: 'tinyint'})
  platform!: StorePlatform;

  @Column({name: 'platform_id', type: 'int'})
  platformID!: number;

  @Column({name: 'created_at', type: 'int'})
  createdAt!: number;

  @Column({name: 'updated_at', type: 'int'})
  updatedAt!: number;
}
