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

  @Column({name: 'created_at', type: 'int'})
  createdAt!: number;

  @Column({name: 'updated_at', type: 'int'})
  updatedAt!: number;

  @Column({name: 'resolved_at', type: 'int', nullable: true})
  resolvedAt?: number;

  @Column({type: 'int', nullable: true})
  resolvingUserID?: number;
}
