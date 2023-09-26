import {UserEntity} from './user.entity';
import {GroupWire} from '@imagine-cms/types';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('guilds')
export class GroupEntity implements GroupWire {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  badge!: string;

  @Column()
  description!: string;

  @Column({name: 'user_id'})
  userID!: number;

  @Column({name: 'room_id'})
  roomID!: number;

  @ManyToOne(() => UserEntity)
  @JoinColumn({name: 'user_id'})
  user?: UserEntity;
}
