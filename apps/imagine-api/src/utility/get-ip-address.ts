import {getRequestFromExecutionContext} from './get-request';
import {ExecutionContext, createParamDecorator} from '@nestjs/common';

export const GetIpAddress = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = getRequestFromExecutionContext(ctx);
    const ipAddress = request.headers['X-Forwarded-For'];
    if (!ipAddress) {
      throw new Error('IP Address not found.  X-Forwarded-For is missing');
    }
    return ipAddress;
  }
);
