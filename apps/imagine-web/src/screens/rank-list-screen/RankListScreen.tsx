import React, { useEffect } from 'react';
import { useRankFetchMany } from '@imagine-cms/client';
import { RankListContainer } from '../../components/rank-list-container/RankListContainer';
import { RankListContainerElement } from '../../components/rank-list-container/RankListContainer.styled';

export function RankListScreen() {
  const { data, fetch } = useRankFetchMany();

  useEffect(() => {
    fetch({ staffOnly: true })
  }, []);

  return (
    <RankListContainerElement>
      {
        data?.map(_ => (
          <RankListContainer key={`rank_${_.id}`} rank={_} />
        ))
      }
    </RankListContainerElement>
  )
}
