import React, { useEffect } from 'react';
import { Link, useRoute } from 'wouter';
import { useRankFetchOne } from '@imagine-cms/client';
import { RankScopesCard } from '../../components/rank-scopes-card/RankScopesCard';
import { RankMembersCard } from '../../components/rank-members-card/RankMembersCard';
import { RankDetailsCard } from '../../components/rank-details-card/RankDetailsCard';

export function PermissionsEditRankScreen() {
  const [, params] = useRoute<{ rankID: string }>('/permissions/:rankID');
  const rankID = Number(params!.rankID);

  const fetchRank = useRankFetchOne();

  useEffect(() => {
    fetchRank.fetch({ id: rankID })
  }, [rankID]);

  return (
    <>
      <h1 style={{ alignItems: 'center', display: 'flex' }}>
        <Link href="/permissions"><i className="fa fa-caret-left fa-2x" style={{ cursor: 'pointer', marginRight: 8 }} /></Link>
        Permissions <small>-&nbsp;{fetchRank.data?.name ?? rankID}</small></h1>
      {
        fetchRank.data && (
          <>
            <RankDetailsCard rank={fetchRank.data} />
            <RankScopesCard rank={fetchRank.data} />
            <RankMembersCard rank={fetchRank.data} />
          </>
        )
      }
    </>
  )
}