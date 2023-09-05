import { toast } from 'react-toastify';
import React, { useContext } from 'react';
import { sessionContext } from '@imagine-cms/web';
import { useSessionDisconnectFacebook } from '@imagine-cms/client';
import { getFacebookLoginRedirect } from '../../../hooks/facebook-login-redirect.hook';
import { ConnectedAccountCard } from '../../../components/connected-account-card/ConnectedAccountCard';

export function FacebookAccountCard() {
  const { session } = useContext(sessionContext);
  const isFacebookConnected = !!session?.facebookID;
  const disconnectFacebook = useSessionDisconnectFacebook();
  const facebookLoginURL = getFacebookLoginRedirect();

  const icon = <i className="fab fa-facebook" />

  const onToggleFacebookAccount = async () => {
    try {
      if (isFacebookConnected) {
        await disconnectFacebook.execute();
        toast.success(<>{icon} You removed a Facebook account from your profile</>);
        return;
      }
      window.open(facebookLoginURL);
    } catch (e) {
      console.log(e)
      toast.error(<>{icon} There was a problem</>);
    }
  }
  return (
    <ConnectedAccountCard icon={icon} onToggle={onToggleFacebookAccount} connected={isFacebookConnected} />
  )
}