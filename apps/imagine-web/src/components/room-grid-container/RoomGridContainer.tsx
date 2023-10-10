import React from 'react';
import { Link } from 'wouter';
import { RoomGridContainerProps } from './RoomGridContainer.types';
import { RoomGridContainerElement } from './RoomGridContainer.styled';

export function RoomGridContainer({ room }: RoomGridContainerProps) {
  return (
    <Link to={`/rooms/${room.id}`}>
      <RoomGridContainerElement>
        <img src="/img/room-icon.svg" />
        <h3>{room.name}</h3>
      </RoomGridContainerElement>
    </Link>
  )
}