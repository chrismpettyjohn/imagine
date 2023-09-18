import {ObjectType} from '@nestjs/graphql';
import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
import {RankFlagsWire, RankScopesWire} from '@imagine-cms/types';

@Entity('permissions')
@ObjectType()
export class RankEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({name: 'rank_name'})
  name!: string;

  @Column({name: 'badge'})
  badgeCode!: string;

  @Column({type: 'json'})
  scopes!: RankScopesWire;

  @Column({type: 'json'})
  flags!: RankFlagsWire;
}
