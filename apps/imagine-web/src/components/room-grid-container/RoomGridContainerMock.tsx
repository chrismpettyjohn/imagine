import React from 'react';
import { RoomGridContainerElement, RoomGridContainerInformationContainer, RoomGridContainerInformationWrapper } from './RoomGridContainer.styled';

export function RoomGridContainerMock() {
  return (
    <RoomGridContainerElement>
      <RoomGridContainerInformationWrapper>
        <RoomGridContainerInformationContainer>
          <h3>-</h3>
        </RoomGridContainerInformationContainer>
      </RoomGridContainerInformationWrapper>
    </RoomGridContainerElement>
  )
}