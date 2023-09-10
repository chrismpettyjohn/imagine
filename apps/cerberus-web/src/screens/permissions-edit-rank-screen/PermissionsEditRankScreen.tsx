import React, { useEffect } from 'react';
import { Link, useRoute } from 'wouter';
import { Card } from '../../blocks/card/Card';
import { useRankFetchOne } from '@imagine-cms/client';
import { RankMembersCard } from '../../components/rank-members-card/RankMembersCard';

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
        Ranks <small>-&nbsp;{rankID}</small></h1>
      {
        fetchRank.data && (
          <>
            <Card header="Details">
              No members found
            </Card>
            <Card header="Permissions">
              No members found
            </Card>
            <RankMembersCard rank={fetchRank.data} />
          </>
        )
      }
    </>
  )
}