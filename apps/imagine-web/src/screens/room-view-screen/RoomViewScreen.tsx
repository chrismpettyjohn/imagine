import React, { useEffect } from 'react';
import { Link, useRoute } from 'wouter';
import { Card } from '../../components/card/Card';
import { useRoomFetchOne } from '@imagine-cms/client';

export function RoomViewScreen() {
  const [_, params] = useRoute<{ roomID: string }>('/rooms/:roomID');
  const roomID = Number(params!.roomID);

  const fetchRoom = useRoomFetchOne();

  const room = fetchRoom?.data;

  useEffect(() => {
    fetchRoom.fetch({ id: roomID });
  }, [roomID]);

  return (
    <>
      <h1><Link to="/rooms"><i className="fa fa-caret-left" style={{ marginRight: 8 }} /></Link>Viewing Room:</h1>
      <br />
      <Card header={room?.name}>
        {
          fetchRoom.loading && (
            <i className="fa fa-spinner fa-spin" />
          )
        }
        <p>{room?.description}</p>
      </Card>
    </>
  )
}