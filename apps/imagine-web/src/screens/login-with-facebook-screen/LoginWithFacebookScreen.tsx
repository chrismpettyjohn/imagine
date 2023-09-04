import { useLocation } from 'wouter';
import { toast } from 'react-toastify';
import { Card } from '../../components/card/Card';
import React, { useContext, useEffect, useMemo } from 'react';
import { useFacebookUserAuthenticate } from '@imagine-cms/client';
import { localStorageService, sessionContext, useFindUserByID } from '@imagine-cms/web';

export function LoginWithFacebookScreen() {
  const [, setLocation] = useLocation();
  const { setSession } = useContext(sessionContext);
  const facebookUserAuthenticate = useFacebookUserAuthenticate();
  const userFetchByID = useFindUserByID(facebookUserAuthenticate?.data?.userID ?? -1);

  const facebookAuthCode = useMemo(() => {
    return window.location.hash.split('#access_token=')[1].split('&data_access_expiration_time')[0]
  }, []);


  const onAttemptFacebookAuthentication = async (authCode: string) => {
    try {
      const session = await facebookUserAuthenticate.execute({ facebookAuthToken: authCode });
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
    if (!facebookAuthCode) {
      return;
    }
    if (facebookUserAuthenticate.loading) {
      return;
    }
    onAttemptFacebookAuthentication(facebookAuthCode);
  }, [facebookAuthCode]);

  return (
    <Card header="Facebook Login">
      logging in with token <b>{facebookAuthCode}</b>
    </Card>
  )
}