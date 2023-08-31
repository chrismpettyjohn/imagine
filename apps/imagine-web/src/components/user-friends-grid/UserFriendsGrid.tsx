import React from 'react';
import { Card } from '../card/Card';
import { UserFriendsGridGrid } from './UserFriendsGrid.styled';
import { SmallUserProfileContainer } from '../small-user-profile-container/SmallUserProfileContainer';

export function UserFriendsGrid() {
  return (
    <Card header="My Friends">
      <UserFriendsGridGrid>
        <SmallUserProfileContainer user={{ username: 'ElChris', look: 'hr-802-37.hd-185-1.ch-804-82.lg-280-73.sh-3068-1408-1408.wa-2001' } as any} />
      </UserFriendsGridGrid>
    </Card>
  )
}