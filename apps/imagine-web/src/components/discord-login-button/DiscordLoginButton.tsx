import React from 'react';
import { DiscordLoginButtonElement } from './DiscordLoginButton.styled';
import { getDiscordLoginRedirect } from '../../hooks/discord-login-redirect.hook';

export function DiscordLoginButton() {
  const discordRedirectURL = getDiscordLoginRedirect();
  return (
    <a href={discordRedirectURL} rel="external noreferrer">
      <DiscordLoginButtonElement>
        Discord
      </DiscordLoginButtonElement>
    </a>
  )
}