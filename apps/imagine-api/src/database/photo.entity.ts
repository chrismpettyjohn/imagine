import {UserEntity} from './user.entity';
import {PhotoWire} from '@imagine-cms/types';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import {RoomEntity} from './room.entity';

@Entity('camera_web')
export class PhotoEntity implements PhotoWire {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({name: 'user_id'})
  userID!: number;

  @ManyToOne(() => UserEntity)
  @JoinColumn({name: 'user_id'})
  user?: UserEntity;

  @Column({name: 'room_id'})
  roomID!: number;

  @ManyToOne(() => RoomEntity)
  @JoinColumn({name: 'room_id'})
  room?: RoomEntity;

  @Column({name: 'url'})
  photoURL!: string;

  @Column({name: 'timestamp'})
  createdAt!: number;
}
