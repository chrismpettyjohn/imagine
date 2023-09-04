import {GoogleUserWire} from './google.types';
import {UserRepository} from '../database/user.repository';
import {SessionService} from '../session/session.service';
import {Injectable, UnauthorizedException} from '@nestjs/common';
import {SessionEntity} from '../database/session.entity';

@Injectable()
export class GoogleAuthService {
  constructor(
    private readonly userRepo: UserRepository,
    private readonly sessionService: SessionService
  ) {}

  async googleUserAuthenticate(
    googleUser: GoogleUserWire
  ): Promise<{accessToken: string; session: SessionEntity}> {
    const matchingUser = await this.userRepo.findOne({
      where: [
        {
          email: googleUser.email,
        },
        {
          googleID: googleUser.id,
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
