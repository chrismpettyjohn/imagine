import {useLocation} from 'wouter';
import React, {useContext, useEffect} from 'react';
import {sessionContext} from '../../context/session/SessionContext';
import {localStorageService} from '../../utility/local-storage.service';

export function LogoutScreen() {
  const [location, setLocation] = useLocation();
  const {setSession} = useContext(sessionContext);

  useEffect(() => {
    localStorageService.purge();
    setSession(null);
    setLocation('/login');
  }, []);

  return null;
}
