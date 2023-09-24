import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BugReportEntity} from './bug-report.entity';
import {BaseRepository} from '../utility/base.repository';

@Injectable()
export class BugReportRepository extends BaseRepository<BugReportEntity> {
  constructor(
    @InjectRepository(BugReportEntity)
    bugReportRepo: Repository<BugReportEntity>
  ) {
    super(bugReportRepo);
  }
}
