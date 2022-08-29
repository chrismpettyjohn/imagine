import {UserEntity} from './user.entity';
import {ObjectType} from '@nestjs/graphql';
import {Column, Entity, PrimaryGeneratedColumn, OneToMany} from 'typeorm';

@Entity('ranks')
@ObjectType()
export class RankEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name!: string;

  @Column({name: 'title'})
  description!: string;

  @Column({name: 'badgeid'})
  badgeCode!: string;

  @OneToMany(() => UserEntity, user => user.rank)
  users?: UserEntity[];

  @OneToMany(() => UserEntity, user => user.rankVip)
  vipUsers?: UserEntity[];
}
