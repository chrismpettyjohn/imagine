import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

export enum FurnitureValueType {
  COMMON = 'COMMON',
  RARE = 'RARE',
  EPIC = 'EPIC',
  LEGENDARY = 'LEGENDARY',
}

@Entity('items_base')
export class FurnitureEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'value_type', type: 'varchar'})
  valueType!: FurnitureValueType;

  @Column({name: 'public_name'})
  publicName!: string;

  @Column({name: 'item_name'})
  itemName!: string;

  @Column({name: 'created_at', type: 'tinyint'})
  createdAt?: number;
}
