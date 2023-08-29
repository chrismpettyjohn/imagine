import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
import {WordFilterWire} from '@imagine-cms/types';

@Entity('wordfilter')
export class WordFilterEntity implements WordFilterWire {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({name: 'key'})
  word!: string;

  @Column()
  replacement!: string;
}
