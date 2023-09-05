import {Module} from '@nestjs/common';
import {ChatlogResolver} from './chatlog.resolver';
import {SessionModule} from '../session/session.module';
import {DatabaseModule} from '../database/database.module';

@Module({
  imports: [DatabaseModule, SessionModule],
  providers: [ChatlogResolver],
  exports: [ChatlogResolver],
})
export class ChatlogModule {}
