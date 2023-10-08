import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('logs_shop_purchases')
export class FurniturePurchaseLogEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'catalog_item_id'})
  furnitureID!: number;

  @Column({name: 'user_id'})
  userID!: number;

  @Column({name: 'item_ids'})
  itemIDs!: string; // 1;2;3

  @Column({name: 'cost_credits'})
  costCredits!: number;

  @Column({name: 'cost_points'})
  costPoints!: number;

  @Column({name: 'amount'})
  quantity!: number;

  @Column({name: 'timestamp'})
  createdAt!: number;
}
