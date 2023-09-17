import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('room_trade_log')
export class UserTradeLogEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'user_one_id', type: 'int'})
  userOneID!: number;

  @Column({name: 'user_one_ip'})
  userOneIPAddress!: string;

  @Column({name: 'user_one_item_count', type: 'int'})
  userOneItemCount!: number;

  @Column({name: 'user_two_id', type: 'int'})
  userTwoID!: number;

  @Column({name: 'user_two_ip'})
  userTwoIPAddress!: string;

  @Column({name: 'user_two_item_count', type: 'int'})
  userTwoItemCount!: number;

  @Column({type: 'int'})
  timestamp!: number;
}
