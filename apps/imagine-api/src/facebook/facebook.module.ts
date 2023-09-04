import {Module} from '@nestjs/common';
import {UserModule} from '../user/user.module';
import {SessionModule} from '../session/session.module';
import {DatabaseModule} from '../database/database.module';
import {FacebookAuthService} from './facebook-auth.service';
import {FacebookAuthResolver} from './facebook-auth.resolver';

@Module({
  imports: [DatabaseModule, UserModule, SessionModule],
  providers: [FacebookAuthResolver, FacebookAuthService],
  exports: [FacebookAuthService],
})
export class FacebookModule {}
