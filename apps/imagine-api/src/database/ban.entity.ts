import {UserEntity} from './user.entity';
import {BanWire} from '@imagine-cms/types';
import {
  Column,
  Entity,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('bans')
export class BanEntity implements BanWire {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({name: 'bantype'})
  type!: string;

  @Column({name: 'ban_reason'})
  reason!: string;

  @Column({name: 'user_id'})
  bannedUserID!: number;

  @ManyToOne(() => UserEntity)
  @JoinColumn({name: 'user_id'})
  bannedUser?: UserEntity;

  @Column({name: 'user_staff_id'})
  addedByUserID!: number;

  @ManyToOne(() => UserEntity)
  @JoinColumn({name: 'user_staff_id'})
  addedByUser?: UserEntity;

  @CreateDateColumn({name: 'timestamp'})
  createdAt?: string;

  @Column({name: 'ban_expire'})
  expiresAt!: string;
}
