import React, { useContext } from 'react';
import { sessionContext } from '@imagine-cms/web';
import { StoriesCard } from '../../components/stories-card/StoriesCard';
import { UserStatsGrid } from '../../components/user-stats-grid/UserStatsGrid';

export function MeScreen() {
  const { session } = useContext(sessionContext);

  return (
    <>
      <StoriesCard stories={[]} />
      <br />
      <UserStatsGrid user={session!} />
    </>
  )
}
