import { Link, useRoute } from 'wouter';
import React, { useEffect } from 'react';
import { useRankFetchOne } from '@imagine-cms/client';
import { RankListContainer } from '../../components/rank-list-container/RankListContainer';

export function RankViewScreen() {
  const [, params] = useRoute<{ rankID: string }>('/ranks/:rankID');
  const rankID = Number(params!.rankID);
  const fetchRank = useRankFetchOne();

  useEffect(() => {
    fetchRank.fetch({ id: rankID })
  }, [rankID]);

  return (
    <>
      <h1><Link to="/ranks"><i className="fa fa-caret-left" style={{ cursor: 'pointer', marginRight: 8 }} /></Link>Ranks - {!fetchRank.data ? <i className="fa fa-spinner fa-spin" /> : fetchRank.data!.name}</h1>
      {
        fetchRank.data && <RankListContainer rank={fetchRank.data} />
      }
    </>
  )
}