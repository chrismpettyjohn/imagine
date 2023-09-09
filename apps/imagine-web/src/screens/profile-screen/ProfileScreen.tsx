import { useRoute } from 'wouter';
import React, { useEffect } from 'react';
import { UserStatsGrid } from '../../components/user-stats-grid/UserStatsGrid';
import { UserProfileContainer } from '../../components/user-profile-container/UserProfileContainer';
import { useUserFetchOne } from '@imagine-cms/client';
import { UserFriendsGrid } from '../../components/user-friends-grid/UserFriendsGrid';
import { UserGroupsGrid } from '../../components/user-groups-grid/UserGroupGrid';
import { UserRoomsGrid } from '../../components/user-rooms-grid/UserRoomsGrid';

export function ProfileScreen() {
  const [_, params] = useRoute<{ username: string }>('/profile/:username');

  const username = params!.username;

  const fetchUser = useUserFetchOne();

  useEffect(() => {
    fetchUser.fetch({ username })
  }, [username]);


  const matchingProfile = fetchUser?.data;

  return (
    <>
      <h1>Viewing Profile:</h1>
      <br />
      {
        fetchUser.loading && <i className="fa fa-spinner fa-spin" />
      }
      {
        matchingProfile && (
          <>

            <UserProfileContainer user={matchingProfile} />
            <br />
            <UserStatsGrid user={matchingProfile} />
            <br />
            <UserFriendsGrid user={matchingProfile} />
            <br />
            <UserGroupsGrid user={matchingProfile} />
            <br />
            <UserRoomsGrid user={matchingProfile} />
            <br />
          </>
        )
      }
    </>
  )
}