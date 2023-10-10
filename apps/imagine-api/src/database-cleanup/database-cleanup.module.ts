import {Module} from '@nestjs/common';
import {DatabaseModule} from '../database/database.module';
import {DatabaseCleanupService} from './database-cleanup.service';

@Module({
  imports: [DatabaseModule],
  providers: [DatabaseCleanupService],
})
export class DatabaseCleanupModule {}
