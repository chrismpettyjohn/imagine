import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('imagine_bug_reports')
export class BugReportEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({name: 'reporting_user_id'})
  reportingUserID!: number;

  @Column({type: 'text'})
  content!: string;

  @Column({type: 'int'})
  severity!: number;

  @Column({type: 'int'})
  createdAt!: number;

  @Column({type: 'int'})
  updatedAt!: number;

  @Column({type: 'int', nullable: true})
  resolvedAt?: number;

  @Column({type: 'int', nullable: true})
  resolvingUserID?: number;
}
