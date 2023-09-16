import {Module} from '@nestjs/common';
import {DatabaseModule} from '../database/database.module';
import {SessionModule} from '../session/session.module';
import {BetaCodeResolver} from './beta-code.resolver';

@Module({
  imports: [DatabaseModule, SessionModule],
  providers: [BetaCodeResolver],
})
export class BetaCodeModule {}
