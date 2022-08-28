import {Redirect} from 'wouter';
import React, {useContext} from 'react';
import {GuardProps} from './guard.types';
import {sessionContext} from '../context/session/SessionContext';

export function GuestGuard({children, redirect = true}: GuardProps) {
  const {session} = useContext(sessionContext);

  if (session) {
    return redirect ? <Redirect to="/dashboard" /> : null;
  }

  return <>{children}</>;
}
