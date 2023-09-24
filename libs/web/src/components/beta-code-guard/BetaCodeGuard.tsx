import { Redirect } from 'wouter'
import React, { useContext } from 'react';
import { BetaCodeGuardProps } from './BetaCodeGuard.types';
import { configContext, sessionContext } from '../../context';

export function BetaCodeGuard({ children, redirect = true }: BetaCodeGuardProps) {
  const { config } = useContext(configContext);
  const { session } = useContext(sessionContext);

  if (!config?.betaCodesRequired) {
    return <>{children}</>
  }

  if (!session?.hasBetaCode) {
    return <>{children}</>
  }

  if (redirect) {
    return <Redirect to="/beta-mode-enabled" />
  }

  return null;
}