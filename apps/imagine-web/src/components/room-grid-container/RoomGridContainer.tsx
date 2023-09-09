import React from 'react';
import { Link } from 'wouter';
import { RoomGridContainerProps } from './RoomGridContainer.types';
import { RoomGridContainerElement, RoomGridContainerInformationContainer, RoomGridContainerInformationWrapper } from './RoomGridContainer.styled';

export function RoomGridContainer({ room }: RoomGridContainerProps) {
  return (
    <Link to={`/rooms/${room.id}`}>
      <RoomGridContainerElement>
        <RoomGridContainerInformationWrapper>
          <RoomGridContainerInformationContainer>
            <h3>{room.name}</h3>
          </RoomGridContainerInformationContainer>
        </RoomGridContainerInformationWrapper>
      </RoomGridContainerElement>
    </Link>
  )
}