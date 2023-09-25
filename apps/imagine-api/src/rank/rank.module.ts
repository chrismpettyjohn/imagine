import {Module} from '@nestjs/common';
import {RankResolver} from './rank.resolver';
import {CommonModule} from '../common/common.module';
import {SessionModule} from '../session/session.module';
import {DatabaseModule} from '../database/database.module';

@Module({
  imports: [CommonModule, SessionModule, DatabaseModule],
  providers: [RankResolver],
})
export class RankModule {}
