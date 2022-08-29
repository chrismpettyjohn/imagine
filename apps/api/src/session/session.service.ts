import {JwtService} from '@nestjs/jwt';
import {SessionContents} from './session.types';
import {HashService} from '../common/hash.service';
import {UserRepository} from '../database/user.repository';
import {SessionRepository} from '../database/session.repository';
import {forwardRef, Inject, Injectable, UnauthorizedException} from '@nestjs/common';

@Injectable()
export class SessionService {
  constructor(
    private readonly jwtService: JwtService,
    @Inject(forwardRef(() => UserRepository))
    private readonly userRepo: UserRepository,
    private readonly hashService: HashService,
    private readonly sessionRepo: SessionRepository
  ) {}

  async loginWithUsernameAndPassword(username: string, password: string): Promise<string> {
    const user = await this.userRepo.findOneOrFail({username});

    const isCorrectPassword = this.hashService.compare(password, user.password);

    if (!isCorrectPassword) {
      throw new UnauthorizedException();
    }

    const newSession = await this.sessionRepo.create({
      userID: user.id!,
    });

    return this.signToken({
      userID: user.id!,
      sessionID: newSession.id!,
    });
  }

  private signToken(sessionContents: SessionContents): string {
    return this.jwtService.sign(sessionContents);
  }
}
