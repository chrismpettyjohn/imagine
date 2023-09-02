import React, { useContext, useEffect, useMemo } from 'react';
import { configContext, useFetchStaffRanks } from '@imagine-cms/web';
import { RankListContainer } from '../../components/rank-list-container/RankListContainer';
import { RankListContainerElement } from '../../components/rank-list-container/RankListContainer.styled';

export function CommunityStaffScreen() {
  const { config } = useContext(configContext);
  const { runQuery, loading, data } = useFetchStaffRanks();

  useEffect(() => {
    runQuery()
  }, []);

  return (
    <RankListContainerElement>
      {
        data?.ranks?.map(_ => (
          <RankListContainer key={`rank_${_.id}`} rank={_} />
        ))
      }
    </RankListContainerElement>
  )
}
