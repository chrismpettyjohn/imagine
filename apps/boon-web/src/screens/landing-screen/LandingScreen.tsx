import {Redirect} from 'wouter';
import React, {useContext} from 'react';
import {sessionContext} from '../../context/session/SessionContext';

export function LandingScreen() {
  const {session} = useContext(sessionContext);
  return <Redirect to={session ? '/me' : '/login'} />
}
