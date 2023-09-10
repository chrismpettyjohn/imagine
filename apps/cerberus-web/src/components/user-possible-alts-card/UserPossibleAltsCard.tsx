import React, { useEffect } from 'react'
import { Card } from '../../blocks/card/Card';
import { useUserFetchMany } from '@imagine-cms/client';
import { UserPossibleAltsCardProps } from './UserPossibleAltsCard.types';

export function UserPossibleAltsCard({ user }: UserPossibleAltsCardProps) {
  const fetchUsers = useUserFetchMany();

  useEffect(() => {
    fetchUsers.fetch({
      ipLast: user.ipLast,
      ipRegistered: user.ipRegistered,
      machineAddress: user.machineAddress,
    })
  }, [user]);

  return (
    <Card header="Possible Alts">

    </Card>
  )
}