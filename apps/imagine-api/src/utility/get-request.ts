import { ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { RawRequest, RequestWithSession } from '../session/session.types';

export function getRequestFromExecutionContext(
  executionContext: ExecutionContext
): RawRequest | RequestWithSession {
  return executionContext.getType() === 'http'
    ? executionContext.switchToHttp().getRequest()
    : GqlExecutionContext.create(executionContext).getContext().req;
}
