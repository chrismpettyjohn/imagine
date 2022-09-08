import React, {useContext} from 'react';
import {GuestGuardProps} from './GuestGuard.types';
import {sessionContext} from '@imagine-cms/web';

export function GuestGuard({children, redirect = false}: GuestGuardProps) {
  const {session} = useContext(sessionContext);

  if (session) {
    return null;
  }

  return <>{children}</>;
}
