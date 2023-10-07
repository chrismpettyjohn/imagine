import React, { useEffect } from 'react';
import { useRankFetchMany } from '@imagine-cms/client';
import { GridLarge } from '../../components/grid/Grid.remix';
import { RankListContainer } from '../../components/rank-list-container/RankListContainer';
import { RankListContainerMock } from '../../components/rank-list-container/RankListContainer.mock';

export function RankListScreen() {
  const { data, fetch, loading } = useRankFetchMany();

  useEffect(() => {
    fetch({ staffOnly: true })
  }, []);

  if (loading) {
    return (
      <GridLarge>
        <RankListContainerMock />
        <RankListContainerMock />
        <RankListContainerMock />
        <RankListContainerMock />
      </GridLarge>
    )
  }

  return (

    <GridLarge>
      {
        data?.map(_ => (
          <RankListContainer key={`rank_${_.id}`} rank={_} />
        ))
      }
    </GridLarge>
  )
}
