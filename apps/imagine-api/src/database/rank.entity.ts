import {ObjectType} from '@nestjs/graphql';
import {RankFlagsWire, RankScopesWire} from '@imagine-cms/types';
import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

export enum RankSiteShowStaff {
  Yes = '1',
  No = '0',
}

@Entity('permissions')
@ObjectType()
export class RankEntity {
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

  @Column({type: 'json'})
  flags!: RankFlagsWire;
}
