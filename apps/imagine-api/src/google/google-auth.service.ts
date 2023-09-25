import {Injectable} from '@nestjs/common';
import {GoogleUserWire} from './google.types';
import {UserService} from '../user/user.service';
import {SessionEntity} from '../database/session.entity';
import {SessionService} from '../session/session.service';
import {UserRepository} from '../database/user.repository';

@Injectable()
export class GoogleAuthService {
  constructor(
    private readonly userRepo: UserRepository,
    private readonly userService: UserService,
    private readonly sessionService: SessionService
  ) {}

  async googleUserAuthenticate(
    googleUser: GoogleUserWire,
    ipAddress: string
  ): Promise<{accessToken: string; session: SessionEntity}> {
    const matchingUser = await this.userRepo.findOne({
      where: [
        {
          email: googleUser.email,
        },
        {
          googleID: googleUser.sub,
        },
      ],
    });

    if (!matchingUser) {
      const newUser = await this.userService.createQuickUser(ipAddress, {
        googleID: googleUser.sub,
        email: googleUser.email,
      });
      return this.sessionService.generateSession(newUser.id!);
    }

    if (!matchingUser.googleID) {
      await this.userRepo.update(
        {id: matchingUser.id!},
        {googleID: googleUser.sub}
      );
    }

    return this.sessionService.generateSession(matchingUser.id!);
  }
}
