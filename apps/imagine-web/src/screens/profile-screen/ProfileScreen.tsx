import { useRoute } from 'wouter';
import React, { useEffect } from 'react';
import { useFetchUserByUsername } from '@imagine-cms/web';
import { UserStatsGrid } from '../../components/user-stats-grid/UserStatsGrid';
import { UserProfileContainer } from '../../components/user-profile-container/UserProfileContainer';

export function ProfileScreen() {
  const [_, params] = useRoute<{ username: string }>('/profile/:username');

  const profileUsername = params!.username;

  const { runQuery, data, loading } = useFetchUserByUsername(profileUsername);

  const matchingProfile = data?.users?.[0];

  useEffect(() => {
    runQuery();
  }, [profileUsername]);

  if (loading) {
    return 'Loading..';
  }

  if (!matchingProfile) {
    return 'Error..';
  }

  return (
    <>
      <h1>Viewing Profile:</h1>
      <br />
      <UserProfileContainer user={matchingProfile!} />
      <br />
      <UserStatsGrid user={matchingProfile} />
    </>
  )
}