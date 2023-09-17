import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('room_enter_log')
export class RoomEnterLogEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'room_id', type: 'int'})
  roomID!: number;

  @Column({name: 'user_id', type: 'int'})
  userID!: number;

  @Column({name: 'timestamp', type: 'int'})
  enterTimestamp!: number;

  @Column({name: 'exit_timestamp', type: 'int'})
  exitTimestamp!: number;
}
