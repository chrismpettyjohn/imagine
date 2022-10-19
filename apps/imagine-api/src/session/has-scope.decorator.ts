import {HasScopeGuard} from './has-scope.guard';
import {RankScopesWire} from '@imagine-cms/types';
import {HasSession} from './has-session.decorator';
import {applyDecorators, SetMetadata, UseGuards} from '@nestjs/common';

export function HasScope(scope: keyof RankScopesWire) {
  return applyDecorators(
    HasSession(),
    SetMetadata('scope', scope),
    UseGuards(HasScopeGuard)
  );
}
