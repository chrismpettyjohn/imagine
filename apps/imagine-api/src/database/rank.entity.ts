import {UserEntity} from './user.entity';
import {ObjectType} from '@nestjs/graphql';
import {RankScopesWire, RankWire} from '@imagine-cms/types';
import {Column, Entity, PrimaryGeneratedColumn, OneToMany} from 'typeorm';

export enum RankSiteShowStaff {
  Yes = '1',
  No = '0',
}

@Entity('permissions')
@ObjectType()
export class RankEntity implements RankWire {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({name: 'rank_name'})
  name!: string;

  @Column({name: 'badge'})
  badgeCode!: string;

  @Column({name: 'site_show_staff', type: 'enum', enum: RankSiteShowStaff})
  siteShowStaff!: RankSiteShowStaff;

  @Column({type: 'json'})
  scopes!: RankScopesWire;

  @OneToMany(() => UserEntity, user => user.rank)
  users?: UserEntity[];
}
