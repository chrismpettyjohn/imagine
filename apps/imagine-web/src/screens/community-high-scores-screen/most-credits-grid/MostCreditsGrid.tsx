import React, { useEffect } from 'react';
import { Card } from '../../../components/card/Card';
import { UserOrderBy, useUserFetchMany } from '@imagine-cms/client';
import { SmallUserProfileContainer } from '../../../components/small-user-profile-container/SmallUserProfileContainer';

export function MostCreditsGrid() {
  const fetchUsers = useUserFetchMany();

  useEffect(() => {
    fetchUsers.fetch({
      orderBy: [UserOrderBy.CREDITS_ASC],
      limit: 5,
    })
  }, []);

  return (
    <Card header="Most Credits">
      {
        fetchUsers.loading && <i className="fa fa-spinner fa-spin" />
      }
      {
        fetchUsers.data?.map(_ => (
          <SmallUserProfileContainer key={`most_credits_${_.id}`} user={_ as any} />
        ))
      }
    </Card>
  )
}