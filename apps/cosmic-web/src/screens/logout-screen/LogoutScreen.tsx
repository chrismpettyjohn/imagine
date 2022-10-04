import {useLocation} from 'wouter';
import {toast} from 'react-toastify';
import React, {useContext, useEffect} from 'react';
import {sessionContext, localStorageService} from '@imagine-cms/web';

export function LogoutScreen() {
  const [location, setLocation] = useLocation();
  const {setSession} = useContext(sessionContext);

  useEffect(() => {
    localStorageService.purge();
    setSession(undefined);
    setLocation('/login');
    toast.success('You were logged out!');
  }, []);

  return null;
}
