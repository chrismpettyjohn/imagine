import React from 'react';
import { UserProfileContainerProps } from './UserProfileContainer.types';
import { AvatarContainer, BadgeContainer, BadgeHolder, InformationContainer, UserProfileContainerContainer } from './UserProfileContainer.styled';

export function UserProfileContainer({ user }: UserProfileContainerProps) {
  return (
    <UserProfileContainerContainer>
      <AvatarContainer src="https://imager.habboon.pw/?figure=ea-1403-63.ch-3001-1408-110.hr-125-61.lg-285-89.fa-1201-1408.sh-905-1408.hd-3536-14-14.he-8394-110.wa-2009-1325.hd-180-14&size=m&direction=4&head_direction=3&gesture=sml&action=wav" />
      <InformationContainer>
        <div>
          <h2>{user.username}</h2>
          <span>"{user.motto}"</span>
        </div>
        <br />
        <BadgeContainer>
          <BadgeHolder>
            <img src="https://habborator.org/badges/badges/Z63.gif" />
          </BadgeHolder>
          <BadgeHolder>
            <img src="https://habborator.org/badges/badges/HBA.gif" />
          </BadgeHolder>
          <BadgeHolder>
            <img src="https://habborator.org/badges/badges/ADM.gif" />
          </BadgeHolder>
          <BadgeHolder>
            <img src="https://habborator.org/badges/badges/Z63.gif" />
          </BadgeHolder>
        </BadgeContainer>
      </InformationContainer>
    </UserProfileContainerContainer>
  )
}