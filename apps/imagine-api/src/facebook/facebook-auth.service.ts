import {Injectable} from '@nestjs/common';
import {UserService} from '../user/user.service';
import {FacebookUserWire} from './facebook.types';
import {SessionEntity} from '../database/session.entity';
import {SessionService} from '../session/session.service';
import {UserRepository} from '../database/user.repository';

@Injectable()
export class FacebookAuthService {
  constructor(
    private readonly userRepo: UserRepository,
    private readonly userService: UserService,
    private readonly sessionService: SessionService
  ) {}

  async facebookUserAuthenticate(
    facebookUser: FacebookUserWire,
    ipAddress: string
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
      const newUser = await this.userService.createQuickUser(ipAddress, {
        facebookID: facebookUser.id,
        email: facebookUser.email,
      });
      return this.sessionService.generateSession(newUser.id!);
    }

    if (!matchingUser?.facebookID) {
      await this.userRepo.update(
        {id: matchingUser.id!},
        {facebookID: facebookUser.id}
      );
    }

    return this.sessionService.generateSession(matchingUser.id!);
  }
}
