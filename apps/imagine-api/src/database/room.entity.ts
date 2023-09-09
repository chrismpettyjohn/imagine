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

  @Column({name: 'name'})
  name!: string;

  @Column()
  description!: string;

  @Column({name: 'owner_id'})
  userID!: number;

  @ManyToOne(() => UserEntity)
  @JoinColumn({name: 'owner_id'})
  user?: UserEntity;

  @Column({name: 'users'})
  usersNow!: number;

  @Column({name: 'users_max'})
  usersMax!: number;
}
