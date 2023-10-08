import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

export enum FurnitureValueType {
  COMMON = 1,
  RARE = 2,
  EPIC = 3,
  LEGENDARY = 4,
}

@Entity('items_base')
export class FurnitureEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'value_type', type: 'tinyint'})
  valueType!: FurnitureValueType;

  @Column({name: 'public_name'})
  publicName!: string;

  @Column({name: 'item_name'})
  itemName!: string;
}
