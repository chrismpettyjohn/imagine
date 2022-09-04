import {Module} from '@nestjs/common';
import {ChatlogResolver} from './chatlog.resolver';
import {SessionModule} from '../session/session.module';
import {DatabaseModule} from '../database/database.module';
import {ChatlogDataloaderService} from './chatlog.dataloader';

@Module({
  imports: [DatabaseModule, SessionModule],
  providers: [ChatlogDataloaderService, ChatlogResolver],
  exports: [ChatlogDataloaderService, ChatlogResolver],
})
export class ChatlogModule {}
