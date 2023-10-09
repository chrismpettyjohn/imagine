import { useLocation } from 'wouter';
import { toast } from 'react-toastify';
import { Card } from '../../components/card/Card';
import React, { useContext, useEffect, useMemo } from 'react';
import { graphQLContext, localStorageService, sessionContext } from '@imagine-cms/web';
import { LoadingMessage } from '../../components/loading-message/LoadingMessage';
import { useFacebookUserAuthenticate, useUserFetchOne } from '@imagine-cms/client';

export function LoginWithFacebookScreen() {
  const [, setLocation] = useLocation();
  const { _setSession } = useContext(sessionContext);
  const facebookUserAuthenticate = useFacebookUserAuthenticate();
  const fetchUser = useUserFetchOne();
  const { refreshClient } = useContext(graphQLContext);

  const facebookAuthCode = useMemo(() => {
    return window.location.hash.split('#access_token=')[1].split('&data_access_expiration_time')[0]
  }, []);


  const onAttemptFacebookAuthentication = async (authCode: string) => {
    try {
      const session = await facebookUserAuthenticate.execute({ facebookAuthToken: authCode });
      localStorageService.set('SESSION', session.sessionToken);
      refreshClient();
      const matchingUser = await fetchUser.fetch({ id: session.userID })
      toast.success(`Welcome back, ${matchingUser.username}`);
      _setSession(matchingUser as any);
      setLocation('/me');
    } catch (e: any) {
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
      <LoadingMessage>
        Logging in via Facebook
      </LoadingMessage>
    </Card>
  )
}