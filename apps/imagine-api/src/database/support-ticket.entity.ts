import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('support_tickets')
export class SupportTicketEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  state!: number;

  @Column()
  type!: number;

  @Column()
  timestamp!: number;

  @Column()
  score!: number;

  @Column({name: 'sender_id'})
  senderID!: number;

  @Column({name: 'reported_id'})
  reportedID!: number;

  @Column({name: 'room_id'})
  roomID!: number;

  @Column({name: 'mod_id'})
  modID!: number;

  @Column()
  issue!: number;

  @Column()
  category!: number;

  @Column({name: 'group_id'})
  groupID!: number;

  @Column({name: 'thread_id'})
  threadID!: number;

  @Column({name: 'comment_id'})
  commentID!: number;

  @Column({name: 'photo_item_id'})
  photoItemID!: number;
}
