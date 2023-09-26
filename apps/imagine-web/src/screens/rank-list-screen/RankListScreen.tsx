import React, { useEffect } from 'react';
import { Grid } from '../../components/grid/Grid';
import { useRankFetchMany } from '@imagine-cms/client';
import { RankListContainer } from '../../components/rank-list-container/RankListContainer';

export function RankListScreen() {
  const { data, fetch } = useRankFetchMany();

  useEffect(() => {
    fetch({ staffOnly: true })
  }, []);

  return (
    <Grid size="extraLarge">
      {
        data?.map(_ => (
          <RankListContainer key={`rank_${_.id}`} rank={_} />
        ))
      }
    </Grid>
  )
}
