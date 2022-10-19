import {ArticleWire} from '@imagine-cms/types';
import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('badge_definitions')
export class BadgeEntity implements ArticleWire {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  code!: string;
}
