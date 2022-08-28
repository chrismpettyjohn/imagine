import {Redirect} from 'wouter';
import React, {useContext} from 'react';
import {GuardProps} from './guard.types';
import {sessionContext} from '../context/session/SessionContext';

export function UserGuard({children, redirect = true}: GuardProps) {
  const {session} = useContext(sessionContext);

  if (!session) {
    return redirect ? <Redirect to="/login" /> : null;
  }

  return <>{children}</>;
}
