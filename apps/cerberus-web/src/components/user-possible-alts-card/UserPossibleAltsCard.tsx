import { Link } from 'wouter';
import React, { useEffect, useMemo } from 'react'
import { Card } from '../../blocks/card/Card';
import { Avatar } from '../../blocks/avatar/Avatar';
import { useUserFetchMany } from '@imagine-cms/client';
import { UserPossibleAltsCardProps } from './UserPossibleAltsCard.types';

export function UserPossibleAltsCard({ user }: UserPossibleAltsCardProps) {
  const fetchUsers = useUserFetchMany();

  useEffect(() => {
    fetchUsers.fetch({
      ipLast: user.ipLast ? [user.ipLast] : undefined,
      ipRegistered: user.ipRegistered ? [user.ipRegistered] : undefined,
      machineAddress: user.machineAddress ? [user.machineAddress] : undefined,
      limit: 10
    })
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
            <Link key={`alt_user_${_.id}`} href={`/users/${_.username}`}>
              <div style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column' }}>
                <Avatar look={_.look} headOnly height={110} width={64} />
                <b style={{ marginTop: -40 }}>{_.username}</b>
              </div>
            </Link>
          ))
        }
      </div>
    </Card >
  )
}