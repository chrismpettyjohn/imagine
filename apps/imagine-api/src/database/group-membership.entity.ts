import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('guilds_members')
export class GroupMembershipEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({name: 'guild_id'})
  groupID!: number;

  @Column({name: 'user_id'})
  userID!: number;

  @Column({name: 'level_id'})
  levelID!: number;

  @Column({name: 'member_since'})
  createdAt!: number;
}
