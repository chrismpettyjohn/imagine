import {UserEntity} from './user.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import {
  WordFilterBannableStatus,
  WordFilterStrictStatus,
  WordFilterWire,
} from '@imagine-cms/types';

@Entity('wordfilter')
export class WordFilterEntity implements WordFilterWire {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  word!: string;

  @Column()
  replacement!: string;

  @Column()
  strict!: WordFilterStrictStatus;

  @Column()
  bannable?: WordFilterBannableStatus;

  @Column({name: 'addedby'})
  addedByUserID!: number;

  @ManyToOne(() => UserEntity)
  @JoinColumn({name: 'addedby'})
  addedByUser?: UserEntity;
}
