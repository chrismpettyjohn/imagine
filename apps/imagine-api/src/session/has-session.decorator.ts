import {UseGuards} from '@nestjs/common';
import {JwtAuthenticationGuard} from './jwt-authentication.guard';

export function HasSession() {
  return UseGuards(JwtAuthenticationGuard);
}
