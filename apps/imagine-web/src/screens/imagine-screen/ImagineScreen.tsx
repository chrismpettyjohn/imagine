import React from 'react';
import { Card } from '../../components/card/Card';
import { YoutubeVideo } from '../../components/youtube-video/YoutubeVideo';

export function ImagineScreen() {
  return (
    <>
      <h1>Imagine</h1>
      <br />
      <Card header="About">
        <div style={{ display: 'flex' }}>
          Crafted with precision using the latest technologies like NodeJS, NestJS, ReactJS, Vite, GraphQL, and Websockets, it's not just a CMS; it's a game-changer for your business.
        </div>
        <div style={{ display: 'flex' }}>
          Imagine offers the unbeatable combination of top-tier performance, blazing-fast speeds, and a development experience that's second to none. With Imagine, you're not just getting a software; you're unlocking a world of possibilities.
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