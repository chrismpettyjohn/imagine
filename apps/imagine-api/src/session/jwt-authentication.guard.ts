import {JwtService} from '@nestjs/jwt';
import {UserRepository} from '../database/user.repository';
import {RawRequest, SessionContents} from './session.types';
import {getRequestFromExecutionContext} from '../utility/get-request';
import {Injectable, CanActivate, ExecutionContext} from '@nestjs/common';

@Injectable()
export class JwtAuthenticationGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userRepo: UserRepository
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: RawRequest = getRequestFromExecutionContext(context);
    const bearerToken: string | undefined =
      // @ts-ignore
      request?.headers?.Authorization?.split('Bearer ')?.[1];

    console.log(bearerToken);

    if (!bearerToken) {
      return false;
    }

    const parsedBearerToken: SessionContents | null = this.jwtService.decode(
      bearerToken
    ) as any;

    if (!parsedBearerToken) {
      return false;
    }

    request.user = await this.userRepo.findOneOrFail(
      {
        id: parsedBearerToken.userID,
      },
      {relations: ['rank']}
    );
    request.sessionID = parsedBearerToken.sessionID;

    return true;
  }
}
