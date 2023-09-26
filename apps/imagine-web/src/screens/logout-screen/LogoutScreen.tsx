import { Redirect } from 'wouter';
import React, { useContext, useEffect } from 'react';
import { sessionContext, localStorageService } from '@imagine-cms/web';

export function LogoutScreen() {
  const { _setSession } = useContext(sessionContext);

  useEffect(() => {
    localStorageService.purge();
    _setSession(undefined);
    window.location.reload();
  }, []);

  return <Redirect to="/login" />
}
