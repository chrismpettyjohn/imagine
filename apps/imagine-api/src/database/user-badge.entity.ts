import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('users_badges')
export class UserBadgeEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'user_id'})
  userID!: number;

  @Column({name: 'slot_id'})
  slotID!: number;

  @Column({name: 'badge_code'})
  badgeCode!: string;
}
