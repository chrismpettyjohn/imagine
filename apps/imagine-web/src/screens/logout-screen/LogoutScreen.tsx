import { Redirect } from 'wouter';
import React, { useContext, useEffect } from 'react';
import { sessionContext, localStorageService, graphQLContext } from '@imagine-cms/web';

export function LogoutScreen() {
  const { _setSession } = useContext(sessionContext);
  const { refreshClient } = useContext(graphQLContext);

  useEffect(() => {
    localStorageService.purge();
    _setSession(undefined);
    refreshClient();
  }, []);

  return <Redirect to="/login" />
}
