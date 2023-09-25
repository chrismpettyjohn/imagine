import { useLocation } from 'wouter';
import { toast } from 'react-toastify';
import { sessionContext } from '@imagine-cms/web';
import { Card } from '../../components/card/Card';
import React, { useContext, useEffect } from 'react';
import { useTempUserLogin, useUserFetchOne } from '@imagine-cms/client';
import { LoadingMessage } from '../../components/loading-message/LoadingMessage';

export function LoginWithDeviceScreen() {
  const fetchUser = useUserFetchOne();
  const [, setLocation] = useLocation();
  const tempUserLogin = useTempUserLogin();
  const { _setSession } = useContext(sessionContext);

  const onAttemptDeviceLogin = async () => {
    try {
      const newSession = await tempUserLogin.execute();
      const matchingUser = await fetchUser.fetch({ id: newSession.userID });
      toast.success(`Welcome back, ${matchingUser.username}`)
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