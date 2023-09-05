import {Module} from '@nestjs/common';
import {UserResolver} from './user.resolver';
import {CommonModule} from '../common/common.module';
import {SessionModule} from '../session/session.module';
import {DatabaseModule} from '../database/database.module';

@Module({
  imports: [CommonModule, DatabaseModule, SessionModule],
  providers: [UserResolver],
})
export class UserModule {}
