import { Link, useRoute } from 'wouter';
import React, { useEffect } from 'react';
import { RankCreateInputDTO } from '@imagine-cms/types';
import { useRankFetchOne, useRankUpdateOne } from '@imagine-cms/client';
import { RankMembersCard } from '../../components/rank-members-card/RankMembersCard';
import { RankDetailsEditorCard } from '../../components/rank-details-editor-card/RankDetailsEditorCard';

export function PermissionsEditRankScreen() {
  const [, params] = useRoute<{ rankID: string }>('/permissions/:rankID');
  const rankID = Number(params!.rankID);

  const fetchRank = useRankFetchOne();
  const updateRank = useRankUpdateOne();

  const onFetchRank = () => {
    fetchRank.fetch({ id: rankID })
  }

  useEffect(() => {
    onFetchRank();
  }, [rankID]);

  const onSaveChanges = async (rankDTO: RankCreateInputDTO) => {
    await updateRank.execute({ id: rankID }, rankDTO);
    onFetchRank();
  }

  return (
    <>
      <h1 style={{ alignItems: 'center', display: 'flex' }}>
        <Link href="/permissions"><i className="fa fa-caret-left fa-2x" style={{ cursor: 'pointer', marginRight: 8 }} /></Link>
        Permissions <small>-&nbsp;{fetchRank.data?.name ?? rankID}</small></h1>
      {
        fetchRank.data && (
          <>
            <RankDetailsEditorCard defaultRank={fetchRank.data} onSave={onSaveChanges} />
            <RankMembersCard rank={fetchRank.data} />
          </>
        )
      }
    </>
  )
}