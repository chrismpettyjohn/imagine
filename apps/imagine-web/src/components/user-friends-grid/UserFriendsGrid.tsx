import { Card } from '../card/Card';
import React, { useEffect } from 'react';
import { useFriendshipFetchMany } from '@imagine-cms/client';
import { UserFriendsGridProps } from './UserFriendsGrid.types';
import { UserFriendsGridContainer } from './UserFriendsGrid.styled';
import { SmallUserProfileContainer } from '../small-user-profile-container/SmallUserProfileContainer';

export function UserFriendsGrid({ user }: UserFriendsGridProps) {
  const friendshipFetch = useFriendshipFetchMany();

  useEffect(() => {
    friendshipFetch.fetch({ userID: user.id, limit: 8 })
  }, [user.id]);

  return (
    <Card header="My Friends">
      {
        friendshipFetch.loading && <i className="fa fa-spinner fa-spin" />
      }
      <UserFriendsGridContainer>
        {
          friendshipFetch.data?.map(_ => (
            <SmallUserProfileContainer key={`friendship_${_.friendID}`} user={_.friend} />
          ))
        }
      </UserFriendsGridContainer>
    </Card>
  )
}