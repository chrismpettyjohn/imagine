import {Redirect} from 'wouter';
import React, {useContext} from 'react';
import {GuestGuardProps} from './GuestGuard.types';
import {sessionContext} from '../../context/session/SessionContext';

export function GuestGuard({children, redirect = true}: GuestGuardProps) {
  const {session} = useContext(sessionContext);

  if (session) {
    return redirect ? <Redirect to="/dashboard" /> : null;
  }

  return <>{children}</>;
}
