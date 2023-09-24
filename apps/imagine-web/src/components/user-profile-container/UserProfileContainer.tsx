import React from 'react';
import { UserProfileContainerProps } from './UserProfileContainer.types';
import { UserBadgeContainerGrid } from '../user-badge-container-grid/UserBadgeContainerGrid';
import { AvatarContainer, InformationContainer, UserProfileContainerContent, UserProfileContainerElement } from './UserProfileContainer.styled';

export function UserProfileContainer({ user }: UserProfileContainerProps) {
  return (
    <UserProfileContainerElement>
      <UserProfileContainerContent>
        <AvatarContainer src={`https://imager.habboon.pw/?figure=${user.look}&direction=2&head_direction=3&gesture=sml&action=wav&size=l`} />
        <InformationContainer>
          <div>
            <h2 className="notranslate">{user.username}</h2>
            {user.motto && <span className="notranslate">"{user.motto}"</span>}
          </div>
          <br />
          <UserBadgeContainerGrid user={user as any} />
        </InformationContainer>
      </UserProfileContainerContent>
    </UserProfileContainerElement>
  )
}