import {Module} from '@nestjs/common';
import {SessionModule} from '../session/session.module';
import {BugReportResolver} from './bug-report.resolver';
import {DatabaseModule} from '../database/database.module';

@Module({
  imports: [DatabaseModule, SessionModule],
  providers: [BugReportResolver],
})
export class BugReportModule {}
