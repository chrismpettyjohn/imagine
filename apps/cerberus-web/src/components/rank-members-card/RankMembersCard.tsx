import React, { useEffect } from 'react';
import { Card } from '../../blocks/card/Card';
import { useUserFetchMany } from '@imagine-cms/client';
import { RankMembersCardProps } from './RankMembersCard.types';
import { SmallUserContainer } from '../small-user-container/SmallUserContainer';

export function RankMembersCard({ rank }: RankMembersCardProps) {
  const fetchUsers = useUserFetchMany();

  useEffect(() => {
    fetchUsers.fetch({ rankIDs: [rank.id] });
  }, [rank.id]);

  const members = fetchUsers.data ?? [];

  return (
    <Card header={<>Members ({members.length})</>}>
      {
        fetchUsers.loading && (
          <div style={{ display: 'flex', gap: 8 }}>
            <i className="fa fa-spinner fa-spin" />
            Loading members...
          </div>
        )
      }
      {
        members.length === 0 && <p>No members found</p>
      }
      <div style={{ display: 'flex', flex: 1, gap: 16 }}>
        {
          members?.map(_ => <SmallUserContainer key={`rank_${rank.id}_member_${_.id}`} user={_} />)
        }
      </div>
    </Card>
  )
}