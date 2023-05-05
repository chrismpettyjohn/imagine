import {Redirect} from 'wouter';
import React, {useContext} from 'react';
import {sessionContext} from '@imagine-cms/web';

export function LandingScreen() {
  const {session} = useContext(sessionContext);
  return <Redirect to={session ? '/me' : '/login'} />
}
