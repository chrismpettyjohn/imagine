import { toast } from 'react-toastify';
import React, { useContext } from 'react';
import { sessionContext } from '@imagine-cms/web';
import { ConnectedAccountCard } from '../../../components/connected-account-card/ConnectedAccountCard';

export function DiscordAccountCard() {
  const { session } = useContext(sessionContext);
  const isDiscordConnected = !!session?.discordID;
  const icon = <i className="fab fa-discord" />

  const onToggleDiscordAccount = async () => {
    try {
      if (isDiscordConnected) {
        toast.success(<>{icon} You removed a Discord account from your profile</>);
        return;
      }

      toast.success(<>{icon} You added a Discord account from your profile</>);
    } catch {
      toast.error(<>{icon} There was a problem</>);
    }
  }

  return (
    <ConnectedAccountCard icon={icon} onToggle={onToggleDiscordAccount} connected={isDiscordConnected} />
  )
}