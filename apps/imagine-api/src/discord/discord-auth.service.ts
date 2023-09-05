import {DiscordUserWire} from './discord.types';
import {UserRepository} from '../database/user.repository';
import {SessionService} from '../session/session.service';
import {Injectable, UnauthorizedException} from '@nestjs/common';
import {SessionEntity} from '../database/session.entity';

@Injectable()
export class DiscordAuthService {
  constructor(
    private readonly userRepo: UserRepository,
    private readonly sessionService: SessionService
  ) {}

  async discordUserAuthenticate(
    discordUser: DiscordUserWire
  ): Promise<{accessToken: string; session: SessionEntity}> {
    const matchingUser = await this.userRepo.findOne({
      where: [
        {
          email: discordUser.email,
        },
        {
          discordID: discordUser.id,
        },
      ],
    });

    if (!matchingUser) {
      // TODO: Automatically generate new account
      throw new UnauthorizedException();
    }

    if (!matchingUser.discordID) {
      await this.userRepo.update(
        {id: matchingUser.id!},
        {discordID: discordUser.id}
      );
    }

    return this.sessionService.generateSession(matchingUser.id!);
  }
}
