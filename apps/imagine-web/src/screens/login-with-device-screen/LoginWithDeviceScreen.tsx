import { useLocation } from 'wouter';
import { toast } from 'react-toastify';
import { Card } from '../../components/card/Card';
import React, { useContext, useEffect } from 'react';
import { useTempUserLogin, useUserFetchOne } from '@imagine-cms/client';
import { LoadingMessage } from '../../components/loading-message/LoadingMessage';
import { graphQLContext, localStorageService, sessionContext } from '@imagine-cms/web';

export function LoginWithDeviceScreen() {
  const fetchUser = useUserFetchOne();
  const [, setLocation] = useLocation();
  const tempUserLogin = useTempUserLogin();
  const { _setSession } = useContext(sessionContext);
  const { refreshClient } = useContext(graphQLContext);

  const onAttemptDeviceLogin = async () => {
    try {
      const session = await tempUserLogin.execute();
      localStorageService.set('SESSION', session.accessToken);
      refreshClient();
      const matchingUser = await fetchUser.fetch({ id: session.userID });
      _setSession(matchingUser as any);
      setLocation('/me');
    } catch (e: any) {
      toast.error('There was a problem logging in');
    }
  }

  useEffect(() => {
    onAttemptDeviceLogin();
  }, []);

  return (
    <>
      <Card header="Login with Device">
        <LoadingMessage>
          Logging in via device
        </LoadingMessage>
      </Card>
    </>
  )
}