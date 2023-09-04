import React from 'react';
import { Card } from '../card/Card';
import { RankListContainerProps } from './RankListContainer.types';
import { RankListContainerHeader, RankListContainerMembers } from './RankListContainer.styled';
import { SmallUserProfileContainer } from '../small-user-profile-container/SmallUserProfileContainer';
import { Badge } from '../badge/Badge';

export function RankListContainer({ rank }: RankListContainerProps) {
  return (
    <Card>
      <RankListContainerHeader>
        <h1>{rank.name}</h1>
        <Badge badge={{ code: 'ADM' }} />
      </RankListContainerHeader>
      <p>{rank.description}</p>
      <RankListContainerMembers>
        {
          rank.users?.map(_ => (
            <SmallUserProfileContainer key={`rank_${rank.id}_user_${_.id}`} user={_} />
          ))
        }
      </RankListContainerMembers>
    </Card>
  )
}