import { useLocation } from 'wouter';
import { toast } from 'react-toastify';
import { Card } from '../../components/card/Card';
import React, { useContext, useEffect, useMemo } from 'react';
import { useGoogleUserAuthenticate, useUserFetchOne } from '@imagine-cms/client';
import { LoadingMessage } from '../../components/loading-message/LoadingMessage';
import { graphQLContext, localStorageService, sessionContext } from '@imagine-cms/web';

export function LoginWithGoogleScreen() {
  const [, setLocation] = useLocation();
  const { _setSession } = useContext(sessionContext);
  const googleUserAuthenticate = useGoogleUserAuthenticate();
  const fetchUser = useUserFetchOne();
  const { refreshClient } = useContext(graphQLContext);

  const googleAuthCode = useMemo(() => {
    return window.location.hash.split('#access_token=')[1].split('&token_type')[0]
  }, []);

  const onAttemptGoogleAuthentication = async (authCode: string) => {
    try {
      const session = await googleUserAuthenticate.execute({ googleAuthToken: authCode });
      localStorageService.set('SESSION', session.sessionToken);
      refreshClient();
      const matchingUser = await fetchUser.fetch({ id: session.userID });
      _setSession(matchingUser as any);
      setLocation('/me');
    } catch (e: any) {
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
      <LoadingMessage>
        Logging in via Google
      </LoadingMessage>
    </Card>
  )
}