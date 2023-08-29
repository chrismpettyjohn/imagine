import {Module} from '@nestjs/common';
import {BanResolver} from './ban.resolver';
import {BanDataloaderService} from './ban.dataloader';
import {SessionModule} from '../session/session.module';
import {DatabaseModule} from '../database/database.module';

@Module({
  imports: [DatabaseModule, SessionModule],
  providers: [BanDataloaderService, BanResolver],
  exports: [BanDataloaderService, BanResolver],
})
export class BanModule {}
