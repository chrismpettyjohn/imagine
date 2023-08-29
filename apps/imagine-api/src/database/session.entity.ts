import {UserEntity} from './user.entity';
import {ObjectType} from '@nestjs/graphql';
import {SessionWire} from '@imagine-cms/types';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('imagine_sessions')
@ObjectType()
export class SessionEntity implements SessionWire {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({name: 'user_id'})
  userID!: number;

  @ManyToOne(() => UserEntity, user => user.sessions)
  @JoinColumn({name: 'user_id'})
  user?: UserEntity;

  @CreateDateColumn({name: 'created_at'})
  createdAt?: string;

  @UpdateDateColumn({name: 'updated_at'})
  updatedAt?: string;
}
