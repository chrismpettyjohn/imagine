import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('messenger_friendships')
export class FriendshipEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({name: 'user_one_id'})
  userID!: number;

  @Column({name: 'user_two_id'})
  friendID!: number;

  @Column()
  relation!: number;

  @Column()
  category!: number;

  @Column({name: 'friends_since'})
  createdAt!: number;
}
