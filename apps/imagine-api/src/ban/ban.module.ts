import {Module} from '@nestjs/common';
import {BanResolver} from './ban.resolver';
import {SessionModule} from '../session/session.module';
import {DatabaseModule} from '../database/database.module';

@Module({
  imports: [DatabaseModule, SessionModule],
  providers: [BanResolver],
  exports: [BanResolver],
})
export class BanModule {}
