import {FacebookUserWire} from './facebook.types';
import {UserRepository} from '../database/user.repository';
import {SessionService} from '../session/session.service';
import {Injectable, UnauthorizedException} from '@nestjs/common';
import {SessionEntity} from '../database/session.entity';

@Injectable()
export class FacebookAuthService {
  constructor(
    private readonly userRepo: UserRepository,
    private readonly sessionService: SessionService
  ) {}

  async facebookUserAuthenticate(
    facebookUser: FacebookUserWire
  ): Promise<{accessToken: string; session: SessionEntity}> {
    const matchingUser = await this.userRepo.findOne({
      where: [
        {
          email: facebookUser.email,
        },
        {
          facebookID: facebookUser.id,
        },
      ],
    });

    if (!matchingUser) {
      // TODO: Automatically generate new account
      throw new UnauthorizedException();
    }

    return this.sessionService.generateSession(matchingUser.id!);
  }
}
