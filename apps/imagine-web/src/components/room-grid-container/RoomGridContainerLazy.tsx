import React, { useEffect } from 'react';
import { useRoomFetchOne } from '@imagine-cms/client';
import { RoomGridContainer } from './RoomGridContainer';
import { LoadingMessage } from '../loading-message/LoadingMessage';

export function RoomGridContainerLazy({ roomID }: { roomID: number }) {
  const fetchRoom = useRoomFetchOne();
  const onFetchRoom = async () => {
    fetchRoom.fetch({ id: roomID });
  }
  useEffect(() => {
    onFetchRoom()
  }, [roomID]);
  if (!fetchRoom.data) {
    return (
      <LoadingMessage>
        Loading room
      </LoadingMessage>
    )
  }
  return (
    <RoomGridContainer room={fetchRoom.data} />
  )
}