import {Module} from '@nestjs/common';
import {WordFilterResolver} from './word-filter.resolver';
import {WordFilterDataloaderService} from './word-filter.dataloader';
import {SessionModule} from '../session/session.module';
import {DatabaseModule} from '../database/database.module';

@Module({
  imports: [DatabaseModule, SessionModule],
  providers: [WordFilterDataloaderService, WordFilterResolver],
  exports: [WordFilterDataloaderService, WordFilterResolver],
})
export class WordFilterModule {}
