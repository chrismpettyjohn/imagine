import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('imagine_staff_applications')
export class StaffApplicationEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'user_id', type: 'int'})
  userID!: number;

  @Column({name: 'rank_id', type: 'int'})
  rankID!: number;

  @Column({name: 'application_accepted', type: 'tinyint'})
  applicationAccepted!: 1 | 0;

  @Column({name: 'reviewing_user_id', type: 'int', nullable: true})
  reviewingUserID?: number;

  @Column({name: 'reviewed_at', type: 'datetime', nullable: true})
  reviewedAt?: number;

  @Column({type: 'text'})
  content!: string;

  @Column({name: 'created_at', type: 'datetime'})
  createdAt!: number;

  @Column({name: 'created_at', type: 'datetime'})
  updatedAt!: number;
}
