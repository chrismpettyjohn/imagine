import { useLocation } from 'wouter';
import { Card } from '../../components/card/Card';
import React, { useContext, useEffect, useMemo } from 'react';
import { useGoogleUserAuthenticate } from '@imagine-cms/client';
import { localStorageService, sessionContext, useFindUserByID } from '@imagine-cms/web';
import { toast } from 'react-toastify';

export function LoginWithGoogleScreen() {
  const [, setLocation] = useLocation();
  const { setSession } = useContext(sessionContext);
  const googleUserAuthenticate = useGoogleUserAuthenticate();
  const userFetchByID = useFindUserByID(googleUserAuthenticate?.data?.userID ?? -1);

  const googleAuthCode = useMemo(() => {
    return window.location.hash.split('#access_token=')[1].split('&token_type')[0]
  }, []);

  const onAttemptGoogleAuthentication = async (authCode: string) => {
    try {
      const session = await googleUserAuthenticate.execute({ googleAuthToken: authCode });
      console.log(session);
      localStorageService.set('SESSION', session.sessionToken);
      const matchingUser = await userFetchByID.runQuery();
      console.log(matchingUser);
      toast.success(`Welcome back, ${matchingUser.user.username}`);
      setSession(matchingUser.user);
      setLocation('/me');
    } catch (e: any) {
      console.log(e);
      toast.error('There was a problem logging in');
    }
  }

  useEffect(() => {
    if (!googleAuthCode) {
      return;
    }
    if (googleUserAuthenticate.loading) {
      return;
    }
    onAttemptGoogleAuthentication(googleAuthCode);
  }, [googleAuthCode]);

  return (
    <Card header="Google Login">
      logging in with token <b>{googleAuthCode}</b>
    </Card>
  )
}