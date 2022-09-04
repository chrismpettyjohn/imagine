import {UserEntity} from './user.entity';
import {BanWire} from '@imagine-cms/types';
import {Column, Entity, CreateDateColumn, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm';

@Entity('bans')
export class BanEntity implements BanWire {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({name: 'bantype'})
  type!: string;

  @Column()
  reason!: string;

  @Column({name: 'value'})
  bannedUserID!: number;

  @ManyToOne(() => UserEntity)
  @JoinColumn({name: 'value'})
  bannedUser?: UserEntity;

  @Column({name: 'added_by'})
  addedByUserID!: number;

  @ManyToOne(() => UserEntity)
  @JoinColumn({name: 'added_by'})
  addedByUser?: UserEntity;

  @CreateDateColumn({name: 'added_date'})
  createdAt?: string;

  @Column({name: 'expire'})
  expiresAt!: string;
}
