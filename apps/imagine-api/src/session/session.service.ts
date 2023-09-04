import {JwtService} from '@nestjs/jwt';
import {SessionContents} from './session.types';
import {HashService} from '../common/hash.service';
import {UserRepository} from '../database/user.repository';
import {SessionRepository} from '../database/session.repository';
import {
  forwardRef,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import {SessionCreatedModel} from './session.model';
import {SessionEntity} from '../database/session.entity';

@Injectable()
export class SessionService {
  constructor(
    private readonly jwtService: JwtService,
    @Inject(forwardRef(() => UserRepository))
    private readonly userRepo: UserRepository,
    private readonly hashService: HashService,
    private readonly sessionRepo: SessionRepository
  ) {}

  async loginWithUsernameAndPassword(
    username: string,
    password: string
  ): Promise<SessionCreatedModel> {
    const user = await this.userRepo.findOneOrFail({username});

    const isCorrectPassword = this.hashService.compare(password, user.password);

    if (!isCorrectPassword) {
      throw new UnauthorizedException();
    }

    const newSession = await this.sessionRepo.create({
      userID: user.id!,
    });

    const accessToken = this.signToken({
      userID: user.id!,
      sessionID: newSession.id!,
    });

    return {
      accessToken,
      id: newSession.id!,
      userID: newSession.userID,
    };
  }

  async generateSession(
    userID: number
  ): Promise<{accessToken: string; session: SessionEntity}> {
    const session = await this.sessionRepo.create({userID});
    const accessToken = this.signToken({
      userID,
      sessionID: session.id!,
    });
    return {
      accessToken,
      session,
    };
  }

  private signToken(sessionContents: SessionContents): string {
    return this.jwtService.sign(sessionContents);
  }
}
