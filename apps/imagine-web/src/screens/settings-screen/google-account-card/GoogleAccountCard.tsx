import { toast } from 'react-toastify';
import React, { useContext } from 'react';
import { sessionContext } from '@imagine-cms/web';
import { ConnectedAccountCard } from '../../../components/connected-account-card/ConnectedAccountCard';

export function GoogleAccountCard() {
  const { session } = useContext(sessionContext);
  const isGoogleConnected = !!session?.googleID;

  const icon = <i className="fab fa-google" />

  const onToggleGoogleAccount = async () => {
    try {
      if (isGoogleConnected) {
        toast.success(<>{icon} You removed a Google account from your profile</>);
        return;
      }

      toast.success(<>{icon} You added a Google account from your profile</>);
    } catch {
      toast.error(<>{icon} There was a problem</>);
    }
  }

  return (
    <ConnectedAccountCard icon={icon} onToggle={onToggleGoogleAccount} connected={isGoogleConnected} />
  )
}