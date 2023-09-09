import React from 'react';
import { Link } from 'wouter';
import { Badge } from '../badge/Badge';
import { GroupGridContainerProps } from './GroupGridContainer.types';
import { GroupGridContainerBadgeContainer, GroupGridContainerElement, GroupGridContainerInformationContainer, GroupGridContainerInformationWrapper } from './GroupGridContainer.styled';

export function GroupGridContainer({ group }: GroupGridContainerProps) {
  return (
    <Link to={`/groups/${group.id}`}>
      <GroupGridContainerElement>
        <GroupGridContainerBadgeContainer>
          <Badge badge={{ code: group.badge } as any} />
        </GroupGridContainerBadgeContainer>
        <GroupGridContainerInformationWrapper>
          <GroupGridContainerInformationContainer>
            <h3>{group.name}</h3>
          </GroupGridContainerInformationContainer>
        </GroupGridContainerInformationWrapper>
      </GroupGridContainerElement>
    </Link>
  )
}