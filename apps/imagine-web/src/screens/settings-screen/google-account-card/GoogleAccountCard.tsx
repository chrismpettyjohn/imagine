import { toast } from 'react-toastify';
import React, { useContext } from 'react';
import { sessionContext } from '@imagine-cms/web';
import { useSessionDisconnectGoogle } from '@imagine-cms/client';
import { getGoogleLoginRedirect } from '../../../hooks/google-login-redirect.hook';
import { ConnectedAccountCard } from '../../../components/connected-account-card/ConnectedAccountCard';

export function GoogleAccountCard() {
  const { session } = useContext(sessionContext);
  const isGoogleConnected = !!session?.googleID;
  const disconnectGoogle = useSessionDisconnectGoogle();
  const googleLoginURL = getGoogleLoginRedirect();

  const icon = <i className="fab fa-google" />

  const onToggleGoogleAccount = async () => {
    try {
      if (isGoogleConnected) {
        await disconnectGoogle.execute();
        toast.success(<>{icon} You removed a Google account from your profile</>);
        return;
      }
      window.open(googleLoginURL)
    } catch (e) {
      toast.error(<>{icon} There was a problem</>);
    }
  }

  return (
    <ConnectedAccountCard icon={icon} onToggle={onToggleGoogleAccount} connected={isGoogleConnected} />
  )
}