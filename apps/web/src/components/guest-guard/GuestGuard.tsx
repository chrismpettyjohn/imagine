import {useNavigate} from 'react-router-dom';
import React, {useContext, useEffect} from 'react';
import {GuestGuardProps} from './GuestGuard.types';
import {sessionContext} from '../../context/session/SessionContext';

export function GuestGuard({children, redirect = true}: GuestGuardProps) {
  const navigate = useNavigate();
  const {session} = useContext(sessionContext);

  useEffect(() => {
    if (session && redirect) {
      navigate('/me');
    }
  }, []);

  return !session ? children : null;
}
