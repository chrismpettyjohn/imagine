import React from 'react';
import { Card } from '../card/Card';
import { RankListContainerProps } from './RankListContainer.types';
import { RankListContainerHeader, RankListContainerMembers } from './RankListContainer.styled';
import { SmallUserProfileContainer } from '../small-user-profile-container/SmallUserProfileContainer';

export function RankListContainer({ rank }: RankListContainerProps) {
  return (
    <Card>
      <RankListContainerHeader>
        <h1>{rank.name}</h1>
        <img src={`https://habborator.org/badges/badges/${rank.badgeCode || 'ADM'}.gif`} />
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