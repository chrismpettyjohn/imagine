import React, { useContext } from 'react';
import { MyRooms } from './my-rooms/MyRooms';
import { MyGroups } from './my-groups/MyGroups';
import { sessionContext } from '@imagine-cms/web';
import { MyProfile } from './my-profile/MyProfile';
import { MyFriends } from './my-friends/MyFriends';
import { StoriesCard } from '../../components/stories-card/StoriesCard';
import { UserStatsGrid } from '../../components/user-stats-grid/UserStatsGrid';

export function MeScreen() {
  const { session } = useContext(sessionContext);

  return (
    <>
      <StoriesCard stories={[]} />
      <br />
      <UserStatsGrid user={session!} />
      <br />
      <MyProfile user={session!} />
      <br />
      <MyFriends />
      <br />
      <MyGroups />
      <br />
      <MyRooms />
    </>
  )
}
