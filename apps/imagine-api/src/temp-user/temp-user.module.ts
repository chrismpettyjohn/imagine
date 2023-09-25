import {Module} from '@nestjs/common';
import {UserModule} from '../user/user.module';
import {TempUserResolver} from './temp-user.resolver';
import {SessionModule} from '../session/session.module';
import {DatabaseModule} from '../database/database.module';

@Module({
  imports: [DatabaseModule, UserModule, SessionModule],
  providers: [TempUserResolver],
})
export class TempUserModule {}
