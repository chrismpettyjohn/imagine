import {Reflector} from '@nestjs/core';
import {RankScopesWire} from '@imagine-cms/types';
import {RawRequest, RequestWithSession} from './session.types';
import {getRequestFromExecutionContext} from '../utility/get-request';
import {Injectable, CanActivate, ExecutionContext} from '@nestjs/common';

@Injectable()
export class HasScopeGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredScope: keyof RankScopesWire = this.reflector.get(
      'scope',
      context.getHandler()
    );
    const request: RequestWithSession = getRequestFromExecutionContext(
      context
    ) as RequestWithSession;

    return !!request.user.rank?.scopes[requiredScope];
  }
}
