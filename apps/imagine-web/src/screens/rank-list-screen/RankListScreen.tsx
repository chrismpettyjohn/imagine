import React, { useEffect } from 'react';
import { useRankFetchMany } from '@imagine-cms/client';
import { RankListContainer } from '../../components/rank-list-container/RankListContainer';

export function RankListScreen() {
  const { data, fetch } = useRankFetchMany();

  useEffect(() => {
    fetch({ staffOnly: true })
  }, []);

  return (

    <>
      {
        data?.map(_ => (
          <div key={`rank_${_.id}`} style={{ marginBottom: 16 }}>

            <RankListContainer rank={_} />
          </div>
        ))
      }</>
  )
}
