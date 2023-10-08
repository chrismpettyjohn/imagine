import React from 'react';
import { Link } from 'wouter';
import { GroupBadge } from '../group-badge/GroupBadge';
import { GroupGridContainerProps } from './GroupGridContainer.types';
import { GroupGridContainerBadgeContainer, GroupGridContainerBanner, GroupGridContainerElement, GroupGridContainerInformationContainer, GroupGridUserCountContainer, GroupGridNameContainer } from './GroupGridContainer.styled';

export function GroupGridContainer({ group }: GroupGridContainerProps) {
  return (
    <Link to={`/groups/${group.id}`}>
      <GroupGridContainerElement>
        <GroupGridContainerBanner>
          <GroupGridContainerBadgeContainer>
            <GroupBadge group={group} />
          </GroupGridContainerBadgeContainer>
        </GroupGridContainerBanner>
        <GroupGridContainerInformationContainer>
          <GroupGridNameContainer className="notranslate">
            {group.name}
          </GroupGridNameContainer>
          <GroupGridUserCountContainer>
            <i className="fa fa-users" style={{ marginRight: 8 }} />
            {group.userCount} members
          </GroupGridUserCountContainer>
        </GroupGridContainerInformationContainer>
      </GroupGridContainerElement>
    </Link>
  )
}