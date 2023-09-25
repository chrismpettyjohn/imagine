import { Card } from '../../blocks/card/Card';
import React, { useEffect, useMemo } from 'react'
import { useUserFetchMany } from '@imagine-cms/client';
import { UserPossibleAltsCardProps } from './UserPossibleAltsCard.types';
import { SmallUserContainer } from '../small-user-container/SmallUserContainer';

export function UserPossibleAltsCard({ user }: UserPossibleAltsCardProps) {
  const fetchUsers = useUserFetchMany();

  useEffect(() => {
    // TODO: Add programtic way to optionally request ipLast, etc
    // fetchUsers.fetch({
    //   ipLast: user.ipLast ? [user.ipLast] : undefined,
    //   ipRegistered: user.ipRegistered ? [user.ipRegistered] : undefined,
    //   machineAddress: user.machineAddress ? [user.machineAddress] : undefined,
    //   limit: 10
    // })
  }, [user]);

  const matchingUsers = useMemo(() => {
    if (!fetchUsers.data) {
      return [];
    }

    return fetchUsers.data.filter(_ => _.id !== user.id);
  }, [fetchUsers.data]);

  return (
    <Card header={<>Possible Alts ({matchingUsers.length})</>}>
      {
        fetchUsers.loading && (
          <div style={{ display: 'flex', gap: 8 }}>
            <i className="fa fa-spinner fa-spin" />
            Loading alts...
          </div>
        )
      }
      {
        matchingUsers.length === 0 && <p>No possible alts found</p>
      }
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 16, alignItems: 'center', justifyContent: 'center' }}>
        {
          matchingUsers.map(_ => (
            <SmallUserContainer key={`alt_user_${_.id}`} user={_} />
          ))
        }
      </div>
    </Card >
  )
}