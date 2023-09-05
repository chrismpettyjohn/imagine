import { toast } from 'react-toastify';
import React, { useContext } from 'react';
import { sessionContext } from '@imagine-cms/web';
import { ConnectedAccountCard } from '../../../components/connected-account-card/ConnectedAccountCard';

export function FacebookAccountCard() {
  const { session } = useContext(sessionContext);
  const isFacebookConnected = !!session?.facebookID;

  const icon = <i className="fab fa-facebook" />

  const onToggleFacebookAccount = async () => {
    try {
      if (isFacebookConnected) {
        toast.success(<>{icon} You removed a Facebook account from your profile</>);
        return;
      }

      toast.success(<>{icon} You added a Facebook account from your profile</>);
    } catch {
      toast.error(<>{icon} There was a problem</>);
    }
  }
  return (
    <ConnectedAccountCard icon={icon} onToggle={onToggleFacebookAccount} connected={isFacebookConnected} />
  )
}