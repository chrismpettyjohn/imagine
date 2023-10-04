import { Card } from '../card/Card';
import { Grid } from '../grid/Grid';
import React, { useEffect } from 'react';
import { useFriendshipFetchMany } from '@imagine-cms/client';
import { UserFriendsGridProps } from './UserFriendsGrid.types';
import { SmallUserProfileContainer } from '../small-user-profile-container/SmallUserProfileContainer';
import { SmallUserProfileContainerMock } from '../small-user-profile-container/SmallUserProfileContainerMock';

export function UserFriendsGrid({ user }: UserFriendsGridProps) {
  const friendshipFetch = useFriendshipFetchMany();

  useEffect(() => {
    friendshipFetch.fetch({ userID: user.id, limit: 4 })
  }, [user.id]);

  return (
    <Card header="My Friends" headerImage="https://www.habboassets.com/assets/images/catalog/icons/icon_61.png">
      <Grid>
        {
          friendshipFetch.data?.length === 0 && <p>You don't have any friends</p>
        }

        {
          friendshipFetch.loading && (
            <>
              <SmallUserProfileContainerMock />
              <SmallUserProfileContainerMock />
              <SmallUserProfileContainerMock />
              <SmallUserProfileContainerMock />
            </>
          )
        }
        {
          friendshipFetch.data?.map(_ => (
            <SmallUserProfileContainer key={`friendship_${_.friendID}`} user={_.friend as any} />
          ))
        }
      </Grid>
    </Card>
  )
}