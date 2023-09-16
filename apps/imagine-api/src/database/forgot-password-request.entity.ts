import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('imagine_forgot_password_requests')
export class ForgotPasswordRequestEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'user_id', type: 'int'})
  userID!: number;

  @Column({name: 'request_code'})
  requestCode!: string;

  @Column({name: 'created_at', type: 'int'})
  createdAt!: number;

  @Column({name: 'expires_at', type: 'int'})
  expiresAt!: number;

  @Column({name: 'redeemed_at', type: 'int', nullable: true})
  redeemedAt?: number;
}
