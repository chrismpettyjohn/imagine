import { Redirect } from 'wouter';
import React, { useContext } from 'react';
import { UserGuardProps } from './UserGuard.types';
import { sessionContext } from '@imagine-cms/web';

export function UserGuard({ children, redirect = false }: UserGuardProps) {
  const { session } = useContext(sessionContext);

  if (!session) {
    return redirect ? <Redirect to="/login" /> : null;
  }

  return <>{children}</>;
}
