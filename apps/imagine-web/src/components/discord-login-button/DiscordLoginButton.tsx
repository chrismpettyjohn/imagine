import React from 'react';
import { ButtonBrand } from '../button/Button.remix';
import { getDiscordLoginRedirect } from '../../hooks/discord-login-redirect.hook';

export function DiscordLoginButton() {
  const discordRedirectURL = getDiscordLoginRedirect();
  return (
    <a href={discordRedirectURL} rel="external noreferrer">
      <ButtonBrand style={{ width: '100%' }}>
        <i className="fab fa-discord" />&nbsp;
        Discord
      </ButtonBrand>
    </a>
  )
}