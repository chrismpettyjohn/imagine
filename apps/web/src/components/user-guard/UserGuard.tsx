import {useNavigate} from 'react-router-dom';
import {UserGuardProps} from './UserGuard.types';
import React, {useContext, useEffect} from 'react';
import {sessionContext} from '../../context/session/SessionContext';

export function UserGuard({children, redirect = true}: UserGuardProps) {
  const navigate = useNavigate();
  const {session} = useContext(sessionContext);

  useEffect(() => {
    if (!session && redirect) {
      navigate('/login');
    }
  }, []);
  return session ? children : null;
}
