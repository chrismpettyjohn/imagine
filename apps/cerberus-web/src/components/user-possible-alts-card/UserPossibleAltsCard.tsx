import React, { useEffect, useMemo } from 'react'
import { Card } from '../../blocks/card/Card';
import { useUserFetchMany } from '@imagine-cms/client';
import { UserPossibleAltsCardProps } from './UserPossibleAltsCard.types';
import { Avatar } from '../../blocks/avatar/Avatar';

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

  return (
    <Card header={<>Possible Alts ({fetchUsers.data?.length ?? 0})</>}>
      {
        fetchUsers.loading && (
          <div style={{ display: 'flex', gap: 8 }}>
            <i className="fa fa-spinner fa-spin" />
            Loading alts...
          </div>
        )
      }
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 16, alignItems: 'center', justifyContent: 'center' }}>
        {
          fetchUsers.data?.map(_ => (
            <div key={`alt_user_${_.id}`} style={{ display: 'flex', flexDirection: 'column' }}>
              <Avatar look={_.look} headOnly height={110} width={64} />
              <b style={{ marginTop: -40 }}>{_.username}</b>
            </div>
          ))
        }
      </div>
    </Card >
  )
}