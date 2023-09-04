import {Module} from '@nestjs/common';
import {UserModule} from '../user/user.module';
import {SessionModule} from '../session/session.module';
import {DatabaseModule} from '../database/database.module';
import {GoogleAuthService} from './google-auth.service';
import {GoogleAuthResolver} from './google-auth.resolver';

@Module({
  imports: [DatabaseModule, UserModule, SessionModule],
  providers: [GoogleAuthResolver, GoogleAuthService],
  exports: [GoogleAuthService],
})
export class GoogleModule {}
