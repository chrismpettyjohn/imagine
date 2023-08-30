import React, { useContext } from 'react';
import { sessionContext } from '@imagine-cms/web';
import { StoriesCard } from '../../components/stories-card/StoriesCard';

export function MeScreen() {
  const { session } = useContext(sessionContext);

  return (
    <>
      <StoriesCard stories={[]} />
    </>
  )
}
