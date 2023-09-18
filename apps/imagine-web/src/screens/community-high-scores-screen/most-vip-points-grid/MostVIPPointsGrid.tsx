import React, { useEffect } from 'react';
import { Card } from '../../../components/card/Card';
import { UserOrderBy, useUserFetchMany } from '@imagine-cms/client';
import { SmallUserProfileContainer } from '../../../components/small-user-profile-container/SmallUserProfileContainer';

export function MostVIPPointsGrid() {
  const fetchUsers = useUserFetchMany();

  useEffect(() => {
    fetchUsers.fetch({
      orderBy: [UserOrderBy.POINTS_ASC],
      limit: 5,
    })
  }, []);

  return (
    <Card header="Most Diamonds">
      {
        fetchUsers.loading && <i className="fa fa-spinner fa-spin" />
      }
      {
        fetchUsers.data?.map(_ => (
          <SmallUserProfileContainer key={`most_vip_points_${_.id}`} user={_ as any} />
        ))
      }
    </Card>
  )
}