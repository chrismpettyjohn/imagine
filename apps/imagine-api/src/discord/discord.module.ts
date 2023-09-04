import {Module} from '@nestjs/common';
import {DiscordAuthResolver} from './discord-auth.resolver';

@Module({
  providers: [DiscordAuthResolver],
})
export class DiscordModule {}
