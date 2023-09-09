import React from 'react';
import { RoomGridContainerProps } from './RoomGridContainer.types';

export function RoomGridContainer({ room }: RoomGridContainerProps) {
  return (
    <>
      {room.name}
    </>
  )
}