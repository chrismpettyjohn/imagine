import { toast } from 'react-toastify';
import React, { useContext } from 'react';
import { sessionContext } from '@imagine-cms/web';
import { useSessionDisconnectDiscord } from '@imagine-cms/client';
import { getDiscordLoginRedirect } from '../../../hooks/discord-login-redirect.hook';
import { ConnectedAccountCard } from '../../../components/connected-account-card/ConnectedAccountCard';

export function DiscordAccountCard() {
  const { session } = useContext(sessionContext);
  const isDiscordConnected = !!session?.discordID;
  const disconnectDiscord = useSessionDisconnectDiscord();
  const discordLoginURL = getDiscordLoginRedirect();

  const icon = <i className="fab fa-discord" />

  const onToggleDiscordAccount = async () => {
    try {
      if (isDiscordConnected) {
        await disconnectDiscord.execute();
        toast.success(<>{icon} You removed a Discord account from your profile</>);
        return;
      }
      window.open(discordLoginURL);
    } catch (e) {
      toast.error(<>{icon} There was a problem</>);
    }
  }

  return (
    <ConnectedAccountCard icon={icon} onToggle={onToggleDiscordAccount} connected={isDiscordConnected} />
  )
}