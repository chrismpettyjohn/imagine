import React, { useContext } from 'react';
import { configContext } from '@imagine-cms/web';
import { Card } from '../../components/card/Card';
import { ImagineLogoContainer } from './ImagineScreen.styled';
import { YoutubeVideo } from '../../components/youtube-video/YoutubeVideo';

export function ImagineScreen() {
  const { config } = useContext(configContext);

  return (
    <>
      <Card header="About">
        <div style={{ display: 'flex', gap: 16 }}>
          <ImagineLogoContainer>
            <img src="/img/imagine.png" height={250} width={250} loading="lazy" />
          </ImagineLogoContainer>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <p>Crafted with precision using the latest technology, it's not just a CMS; it's a game-changer for retros everywhere.</p>
            <p>Imagine offers the unbeatable combination of top-tier performance, blazing-fast speeds, and a development experience that's second to none.</p>
            <p>Solely designed and developed from the ground up by <b>LeChris</b></p>
            <p><b>Version:</b>{config?.softwareVersion ?? 'N/A'}</p>
          </div>
        </div>
      </Card>
      <br />
      <Card>
        <YoutubeVideo videoID="Wi8gfetK1og" startAt={31} />
      </Card>
    </>
  )
}