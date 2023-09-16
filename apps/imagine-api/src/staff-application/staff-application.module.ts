import {Module} from '@nestjs/common';
import {SessionModule} from '../session/session.module';
import {DatabaseModule} from '../database/database.module';
import {StaffApplicationResolver} from './staff-application.resolver';

@Module({
  imports: [DatabaseModule, SessionModule],
  providers: [StaffApplicationResolver],
})
export class StaffApplicationModule {}
