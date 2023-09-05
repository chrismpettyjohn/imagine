import {Module} from '@nestjs/common';
import {SessionModule} from '../session/session.module';
import {WordFilterResolver} from './word-filter.resolver';
import {DatabaseModule} from '../database/database.module';

@Module({
  imports: [DatabaseModule, SessionModule],
  providers: [WordFilterResolver],
  exports: [WordFilterResolver],
})
export class WordFilterModule {}
