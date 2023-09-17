import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

export enum RadioRequestStatus {
  Requested = 'requested',
  Approved = 'approved',
  Rejected = 'rejected',
}

@Entity('imagine_radio_requests')
export class RadioRequestEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'user_id', type: 'int'})
  userID!: number;

  @Column({type: 'varchar'})
  content!: string;

  @Column({type: 'varchar'})
  status!: RadioRequestStatus;

  @Column({name: 'reviewing_user_id', type: 'int', nullable: true})
  reviewingUserID?: number;

  @Column({name: 'reviewed_at', type: 'int', nullable: true})
  reviewedAt?: number;

  @Column({name: 'created_at', type: 'int'})
  createdAt!: number;

  @Column({name: 'updated_at', type: 'int'})
  updatedAt!: number;
}
