import React, { useContext } from 'react';
import { configContext } from '@imagine-cms/web';

export function DiscordWidget() {
  const { config } = useContext(configContext);
  return (
    <>
      {
        config?.discordWidget && (
          <div dangerouslySetInnerHTML={{ __html: config.discordWidget }} />
        )
      }</>
  )
}