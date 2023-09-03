import React, { useContext } from 'react';
import { configContext } from '@imagine-cms/web';
import { Card } from '../../components/card/Card';
import { ImagineLogoContainer } from './ImagineScreen.styled';
import { YoutubeVideo } from '../../components/youtube-video/YoutubeVideo';

export function ImagineScreen() {
  const { config } = useContext(configContext);

  return (
    <>
      <h1>Imagine</h1>
      <br />
      <Card header="About">
        <div style={{ display: 'flex', gap: 16 }}>
          <ImagineLogoContainer>
            <img src="https://i.imgur.com/P7AOwnl.png" height={250} width={250} />
          </ImagineLogoContainer>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <p>Crafted with precision using the latest technologies like NodeJS, NestJS, ReactJS, Vite, GraphQL, and Websockets, it's not just a CMS; it's a game-changer for your business.</p>
            <p>Imagine offers the unbeatable combination of top-tier performance, blazing-fast speeds, and a development experience that's second to none. With Imagine, you're not just getting a software; you're unlocking a world of possibilities.</p>
          </div>
        </div>
      </Card>
      <br />
      <Card>
        <div>
          <b>Version: </b>
          <p>{config?.softwareVersion ?? 'N/A'}</p>
        </div>
      </Card>
      <br />
      <Card header="Credits">
        <div style={{ display: 'flex' }}>
          Developed and designed from the ground up solely by&nbsp;<b>LeChris</b>.
        </div>
      </Card>
      <br />
      <Card>
        <YoutubeVideo videoID="Wi8gfetK1og" startAt={31} />
      </Card>
    </>
  )
}