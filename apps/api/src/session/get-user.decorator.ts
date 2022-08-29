import {RawRequest} from './session.types';
import {UserEntity} from '../database/user.entity';
import {getRequestFromExecutionContext} from '../utility/get-request';
import {createParamDecorator, ExecutionContext, UnauthorizedException} from '@nestjs/common';

// tslint:disable-next-line:variable-name - In Typescript decorators start with a capital letter
export const GetUser = createParamDecorator((data: unknown, ctx: ExecutionContext): UserEntity => {
  const request: RawRequest = getRequestFromExecutionContext(ctx);

  if (!request.user) {
    throw new UnauthorizedException();
  }

  return request.user;
});
