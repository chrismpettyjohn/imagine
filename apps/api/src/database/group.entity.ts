import {UserEntity} from './user.entity';
import {GroupWire} from '@imagine-cms/types';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('groups')
export class GroupEntity implements GroupWire {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  badge!: string;

  @Column({name: 'desc'})
  description!: string;

  @Column({name: 'owner_id'})
  userID!: number;

  @ManyToOne(() => UserEntity)
  @JoinColumn({name: 'owner_id'})
  user?: UserEntity;
}
