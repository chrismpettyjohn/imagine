import React from 'react';
import { ButtonPrimary } from '../button/Button.remix';
import { getDiscordLoginRedirect } from '../../hooks/discord-login-redirect.hook';

export function DiscordLoginButton() {
  const discordRedirectURL = getDiscordLoginRedirect();
  return (
    <a href={discordRedirectURL} rel="external noreferrer">
      <ButtonPrimary style={{ width: '100%' }}>
        <i className="fab fa-discord" />&nbsp;
        Discord
      </ButtonPrimary>
    </a>
  )
}