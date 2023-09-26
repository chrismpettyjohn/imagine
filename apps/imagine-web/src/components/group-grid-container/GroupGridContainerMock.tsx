import React from 'react';
import { Badge } from '../badge/Badge';
import { GroupGridContainerBadgeContainer, GroupGridContainerElement, GroupGridContainerInformationContainer, GroupGridContainerInformationWrapper } from './GroupGridContainer.styled';

export function GroupGridContainerMock() {
  return (
    <GroupGridContainerElement>
      <GroupGridContainerBadgeContainer>
        <Badge badge={{ code: 'FAN' } as any} />
      </GroupGridContainerBadgeContainer>
      <GroupGridContainerInformationWrapper>
        <GroupGridContainerInformationContainer>
          <h3>-</h3>
        </GroupGridContainerInformationContainer>
      </GroupGridContainerInformationWrapper>
    </GroupGridContainerElement>
  )
}