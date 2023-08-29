import {RawRequest} from './session.types';
import {getRequestFromExecutionContext} from '../utility/get-request';
import {
  createParamDecorator,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';

// tslint:disable-next-line:variable-name - In Typescript decorators start with a capital letter
export const GetSession = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): number => {
    const request: RawRequest = getRequestFromExecutionContext(ctx);

    if (!request.sessionID) {
      throw new UnauthorizedException();
    }

    return request.sessionID;
  }
);
