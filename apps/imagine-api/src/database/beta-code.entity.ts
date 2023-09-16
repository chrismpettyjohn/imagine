import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('imagine_beta_codes')
export class BetaCodeEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'beta_code'})
  betaCode!: string;

  @Column({name: 'user_id'})
  userID?: number;
}
