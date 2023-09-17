import {Module} from '@nestjs/common';
import {SessionModule} from '../session/session.module';
import {DatabaseModule} from '../database/database.module';
import {UserTradeLogResolver} from './user-trade-log.resolver';

@Module({
  imports: [DatabaseModule, SessionModule],
  providers: [UserTradeLogResolver],
})
export class UserTradeLogModule {}
