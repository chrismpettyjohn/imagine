import React from 'react';
import { MyFriendAvatarContainer, MyFriendInformationContainer, MyFriendUserContainer, MyFriendsContainer, MyFriendsGrid } from './MyFriends.styled';

export function MyFriends() {
  return (
    <MyFriendsContainer>
      <h1>My Friends</h1>
      <MyFriendsGrid>
        <MyFriendUserContainer>
          <MyFriendAvatarContainer src="https://images.habbox.fr/?figure=hr-802-37.hd-185-1.ch-804-82.lg-280-73.sh-3068-1408-1408.wa-2001" />
          <MyFriendInformationContainer>
            <h3>ElChris</h3>
          </MyFriendInformationContainer>
        </MyFriendUserContainer>
      </MyFriendsGrid>
    </MyFriendsContainer>
  )
}