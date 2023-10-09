import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('items')
export class UserFurnitureEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'user_id', type: 'int'})
  userID!: number;

  @Column({name: 'room_id', type: 'int'})
  roomID!: number;

  @Column({name: 'item_id', type: 'int'})
  itemID!: number;

  @Column({name: 'created_at', type: 'timestamp'})
  createdAt!: number;
}
