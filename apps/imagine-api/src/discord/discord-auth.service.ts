import {Injectable} from '@nestjs/common';
import {DiscordUserWire} from './discord.types';
import {UserService} from '../user/user.service';
import {SessionEntity} from '../database/session.entity';
import {SessionService} from '../session/session.service';
import {UserRepository} from '../database/user.repository';

@Injectable()
export class DiscordAuthService {
  constructor(
    private readonly userRepo: UserRepository,
    private readonly userService: UserService,
    private readonly sessionService: SessionService
  ) {}

  async discordUserAuthenticate(
    discordUser: DiscordUserWire,
    ipAddress: string
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
      const newUser = await this.userService.createQuickUser(ipAddress, {
        discordID: discordUser.id,
        email: discordUser.email,
      });
      return this.sessionService.generateSession(newUser.id!);
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
