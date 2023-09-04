import React from 'react';
import { DISCORD_REDIRECT_URL } from '@imagine-cms/web';
import { DiscordLoginButtonElement } from './DiscordLoginButton.styled';

export function DiscordLoginButton() {
  return (
    <a href={DISCORD_REDIRECT_URL} rel="external noreferrer">
      <DiscordLoginButtonElement>
        Discord
      </DiscordLoginButtonElement>
    </a>
  )
}