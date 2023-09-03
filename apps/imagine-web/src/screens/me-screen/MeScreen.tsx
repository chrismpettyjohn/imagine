import React, { useContext } from 'react';
import { sessionContext } from '@imagine-cms/web';
import { UserStatsGrid } from '../../components/user-stats-grid/UserStatsGrid';
import { UserFriendsGrid } from '../../components/user-friends-grid/UserFriendsGrid';
import { UserRoomsContainer } from '../../components/user-rooms-container/UserRoomsContainer';
import { UserGroupsContainer } from '../../components/user-groups-container/UserGroupsContainer';
import { UserProfileContainer } from '../../components/user-profile-container/UserProfileContainer';
import { LatestArticlesGrid } from '../../components/latest-articles-grid/LatestArticlesGrid';
import { MOCK_USER } from '../../const';
import { LatestPhotosContainer } from '../../components/latest-photos-container/LatestPhotosContainer';

export function MeScreen() {
  const { session } = useContext(sessionContext);

  const user = session ?? MOCK_USER;

  return (
    <>
      <LatestPhotosContainer />
      <br />
      <UserStatsGrid user={user} />
      <br />
      <UserProfileContainer user={user} />
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
