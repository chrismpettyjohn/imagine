import React from 'react';
import { Badge } from '../badge/Badge';
import { GroupGridContainerBadgeContainer, GroupGridContainerBanner, GroupGridContainerElement, GroupGridContainerInformationContainer, GroupGridUserCountContainer, GroupGridNameContainer } from './GroupGridContainer.styled';

export function GroupGridContainerMock() {
  return (
    <GroupGridContainerElement>
      <GroupGridContainerBanner>
        <GroupGridContainerBadgeContainer>
          <Badge badge={{ code: 'FAN' } as any} />
        </GroupGridContainerBadgeContainer>
      </GroupGridContainerBanner>
      <GroupGridContainerInformationContainer>
        <GroupGridNameContainer className="notranslate">
          -
        </GroupGridNameContainer>
        <GroupGridUserCountContainer>
          <i className="fa fa-users" style={{ marginRight: 8 }} />
          0
        </GroupGridUserCountContainer>
      </GroupGridContainerInformationContainer>
    </GroupGridContainerElement>
  )
}