import React from 'react';
import { useRoute } from 'wouter';

export function RoomsViewRoomScreen() {
  const [, params] = useRoute<{ roomID: string }>('/rooms/:roomID');
  const roomID = Number(params!.roomID);
  return (
    <>
      <h1>Rooms <small>-&nbsp;{roomID}</small></h1>
      Hello world.
    </>
  )
}