import React from 'react';
import { UserProfileContainerProps } from './UserProfileContainer.types';
import { UserBadgeContainerGrid } from '../user-badge-container-grid/UserBadgeContainerGrid';
import { AvatarContainer, InformationContainer, UserProfileContainerContent, UserProfileContainerElement } from './UserProfileContainer.styled';
import { Badge } from '../badge/Badge';

export function UserProfileContainer({ user }: UserProfileContainerProps) {
  return (
    <UserProfileContainerElement>
      <UserProfileContainerContent>
        <AvatarContainer src={`https://imager.habboon.pw/?figure=${user.look}&direction=2&head_direction=3&gesture=sml&action=wav&size=l`} />
        <InformationContainer>
          <div>

            <div style={{ display: 'flex', gap: 8 }}>
              <Badge badge={{ code: user.rank.badgeCode }} style={{ height: 45, marginTop: 10 }} />
              <h2 className="notranslate" style={{ color: user.rank.backgroundColor }}>
                {user.username}
              </h2>
            </div>
            {user.motto && <span className="notranslate">"{user.motto}"</span>}
          </div>
          <br />
          <UserBadgeContainerGrid user={user as any} />
        </InformationContainer>
      </UserProfileContainerContent>
    </UserProfileContainerElement>
  )
}