import {UserEntity} from '../user/user.entity';
import {Column, Entity, PrimaryGeneratedColumn, OneToMany} from 'typeorm';

@Entity('ranks')
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
