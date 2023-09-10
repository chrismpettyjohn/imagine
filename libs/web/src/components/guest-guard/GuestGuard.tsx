import { Redirect } from 'wouter';
import React, { useContext } from 'react';
import { GuestGuardProps } from './GuestGuard.types';
import { sessionContext } from '../../context/session/SessionContext';

export function GuestGuard({ children, redirect = false }: GuestGuardProps) {
  const { session } = useContext(sessionContext);

  if (session) {
    return redirect ? <Redirect to="/login" /> : null;
  }

  return <>{children}</>;
}
