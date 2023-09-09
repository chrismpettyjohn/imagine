import { useLocation } from 'wouter';
import { Card } from '../../components/card/Card';
import React, { useContext, useEffect, useMemo } from 'react';
import { useDiscordUserAuthenticate } from '@imagine-cms/client';
import { localStorageService, sessionContext, useFindUserByID } from '@imagine-cms/web';
import { toast } from 'react-toastify';

export function LoginWithDiscordScreen() {
  const [, setLocation] = useLocation();
  const { setSession } = useContext(sessionContext);
  const discordUserAuthenticate = useDiscordUserAuthenticate();
  const userFetchByID = useFindUserByID(discordUserAuthenticate?.data?.userID ?? -1);

  const discordAuthCode = useMemo(() => {
    return window.location.hash.split('#access_token=')[1].split('&expires_in')[0]
  }, []);

  const onAttemptDiscordAuthentication = async (authCode: string) => {
    try {
      const session = await discordUserAuthenticate.execute({ discordAuthToken: authCode });
      localStorageService.set('SESSION', session.sessionToken);
      const matchingUser = await userFetchByID.runQuery();
      toast.success(`Welcome back, ${matchingUser.user.username}`);
      setSession(matchingUser.user);
      setLocation('/me');
    } catch (e: any) {
      toast.error('There was a problem logging in');
    }
  }

  useEffect(() => {
    if (!discordAuthCode) {
      return;
    }
    if (discordUserAuthenticate.loading) {
      return;
    }
    onAttemptDiscordAuthentication(discordAuthCode);
  }, [discordAuthCode]);

  return (
    <Card header="Discord Login">
      logging in with token <b>{discordAuthCode}</b>
    </Card>
  )
}