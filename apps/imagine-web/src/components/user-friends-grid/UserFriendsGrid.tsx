import React from 'react';
import { MyFriendAvatarContainer, MyFriendInformationContainer, MyFriendUserContainer, UserFriendsGridGrid } from './UserFriendsGrid.styled';
import { Card } from '../card/Card';

export function UserFriendsGrid() {
  return (
    <Card header="My Friends">
      <UserFriendsGridGrid>
        <MyFriendUserContainer>
          <MyFriendAvatarContainer src="https://images.habbox.fr/?figure=hr-802-37.hd-185-1.ch-804-82.lg-280-73.sh-3068-1408-1408.wa-2001" />
          <MyFriendInformationContainer>
            <h3>ElChris</h3>
          </MyFriendInformationContainer>
        </MyFriendUserContainer>
      </UserFriendsGridGrid>
    </Card>
  )
}