import {Module} from '@nestjs/common';
import {UserModule} from '../user/user.module';
import {SessionModule} from '../session/session.module';
import {DiscordAuthService} from './discord-auth.service';
import {DatabaseModule} from '../database/database.module';
import {DiscordAuthResolver} from './discord-auth.resolver';

@Module({
  imports: [DatabaseModule, UserModule, SessionModule],
  providers: [DiscordAuthResolver, DiscordAuthService],
})
export class DiscordModule {}
