import { Redirect } from 'wouter';
import React, { useContext } from 'react';
import { RankScopesWire } from '@imagine-cms/types';
import { ScopeGuardProps } from './ScopeGuard.types';
import { sessionContext } from '../../context/session/SessionContext';

export function ScopeGuard({ children, scope, redirect = false }: ScopeGuardProps) {
  const { session } = useContext(sessionContext);

  const userHasRequiredScope = !!session?.rank?.scopes?.[scope]

  if (!userHasRequiredScope) {
    return redirect ? <Redirect to="/me" /> : null;
  }

  return <>{children}</>;
}

export const RouteScopeGuard = (scope: keyof RankScopesWire) => ({ ...props }: ScopeGuardProps) => {
  return <ScopeGuard {...props} scope={scope} />
}