import { useLocation } from 'wouter';
import React, { useContext, useEffect } from 'react';
import { sessionContext, localStorageService } from '@imagine-cms/web';

export function LogoutScreen() {
  const [location, setLocation] = useLocation();
  const { _setSession } = useContext(sessionContext);

  useEffect(() => {
    localStorageService.purge();
    _setSession(undefined);
    setLocation('/login');
  }, []);

  return null;
}
