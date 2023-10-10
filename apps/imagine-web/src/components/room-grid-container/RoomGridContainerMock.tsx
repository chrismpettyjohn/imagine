import React from 'react';
import { RoomGridContainerElement } from './RoomGridContainer.styled';

export function RoomGridContainerMock() {
  return (
    <RoomGridContainerElement>
      <img src="/img/room-icon.svg" />
      <h3>-</h3>
    </RoomGridContainerElement>
  )
}