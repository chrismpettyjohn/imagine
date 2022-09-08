import {UserEntity} from './user.entity';
import {RoomWire} from '@imagine-cms/types';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('rooms')
export class RoomEntity implements RoomWire {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({name: 'caption'})
  name!: string;

  @Column()
  description!: string;

  @Column({name: 'owner'})
  userID!: number;

  @ManyToOne(() => UserEntity)
  @JoinColumn({name: 'owner'})
  user?: UserEntity;
}
