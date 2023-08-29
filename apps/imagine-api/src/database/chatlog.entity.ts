import {UserEntity} from './user.entity';
import {ChatlogWire} from '@imagine-cms/types';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('chatlogs_room')
export class ChatlogEntity implements ChatlogWire {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  message?: string;

  @Column({name: 'user_from_id'})
  userID!: number;

  @ManyToOne(() => UserEntity)
  @JoinColumn({name: 'user_id'})
  user?: UserEntity;

  @Column({name: 'room_id'})
  roomID!: number;

  @Column({name: 'timestamp'})
  createdAt!: string;
}
