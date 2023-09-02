import React from 'react';
import { UserProfileContainerProps } from './UserProfileContainer.types';
import { AvatarContainer, BadgeContainerGrid, InformationContainer, UserProfileContainerContent, UserProfileContainerElement } from './UserProfileContainer.styled';
import { BadgeContainer } from '../badge-container/BadgeContainer';

export function UserProfileContainer({ user }: UserProfileContainerProps) {
  return (
    <UserProfileContainerElement>
      <UserProfileContainerContent>
        <AvatarContainer src={`https://imager.habboon.pw/?figure=${user.look}&direction=2&head_direction=3&gesture=sml&action=wav&size=l`} />
        <InformationContainer>
          <div>
            <h2>{user.username}</h2>
            <span>"{user.motto}"</span>
          </div>
          <br />
          <BadgeContainerGrid>
            <BadgeContainer badge={{ code: 'ADM' }} />
            <BadgeContainer badge={{ code: 'FAN' }} />
            <BadgeContainer badge={{ code: 'ADM' }} />
            <BadgeContainer badge={{ code: 'ADM' }} />
          </BadgeContainerGrid>
        </InformationContainer>
      </UserProfileContainerContent>
    </UserProfileContainerElement>
  )
}