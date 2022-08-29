import {UserEntity} from './user.entity';
import {ObjectType} from '@nestjs/graphql';
import {Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm';

@Entity('imagine_sessions')
@ObjectType()
export class SessionEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'user_id'})
  userID!: number;

  @ManyToOne(() => UserEntity, user => user.sessions)
  @JoinColumn({name: 'user_id'})
  user?: UserEntity;
}
