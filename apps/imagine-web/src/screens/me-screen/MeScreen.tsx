import React, { useContext } from 'react';
import { sessionContext } from '@imagine-cms/web';
import { UserStatsGrid } from '../../components/user-stats-grid/UserStatsGrid';
import { UserFriendsGrid } from '../../components/user-friends-grid/UserFriendsGrid';
import { UserRoomsContainer } from '../../components/user-rooms-container/UserRoomsContainer';
import { UserGroupsContainer } from '../../components/user-groups-container/UserGroupsContainer';
import { UserProfileContainer } from '../../components/user-profile-container/UserProfileContainer';
import { StoriesGridContainer } from '../../components/stories-grid-container/StoriesGridContainer';
import { LatestArticlesGrid } from '../../components/latest-articles-grid/LatestArticlesGrid';

export function MeScreen() {
  const { session } = useContext(sessionContext);

  return (
    <>
      <StoriesGridContainer stories={[]} />
      <br />
      <UserStatsGrid user={session!} />
      <br />
      <UserProfileContainer user={session!} />
      <br />
      <UserFriendsGrid />
      <br />
      <UserGroupsContainer />
      <br />
      <UserRoomsContainer />
      <br />
      <LatestArticlesGrid />
    </>
  )
}
