import { MOCK_USER } from '../../const';
import React, { useContext } from 'react';
import { sessionContext } from '@imagine-cms/web';
import { GridLarge } from '../../components/grid/Grid.remix';
import { UserRoomsGrid } from '../../components/user-rooms-grid/UserRoomsGrid';
import { UserStatsGrid } from '../../components/user-stats-grid/UserStatsGrid';
import { UserGroupsGrid } from '../../components/user-groups-grid/UserGroupGrid';
import { UserFriendsGrid } from '../../components/user-friends-grid/UserFriendsGrid';
import { LatestArticlesGrid } from '../../components/latest-articles-grid/LatestArticlesGrid';
import { UserProfileContainer } from '../../components/user-profile-container/UserProfileContainer';

export function MeScreen() {
  const { session } = useContext(sessionContext);

  const user: any = session ?? MOCK_USER;

  return (
    <>
      <UserProfileContainer user={user} />
      <br />
      <UserStatsGrid user={user} />
      <br />
      <GridLarge>
        <UserFriendsGrid user={user} />
        <UserGroupsGrid user={user} />
        <UserRoomsGrid user={user} />
      </GridLarge>
      <br />
      <LatestArticlesGrid />
    </>
  )
}
