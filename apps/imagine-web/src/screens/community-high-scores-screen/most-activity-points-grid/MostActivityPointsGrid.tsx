import React, { useEffect } from 'react';
import { Card } from '../../../components/card/Card';
import { UserOrderBy, useUserFetchMany } from '@imagine-cms/client';
import { SmallUserProfileContainer } from '../../../components/small-user-profile-container/SmallUserProfileContainer';

export function MostActivityPointsGrid() {
  const fetchUsers = useUserFetchMany();

  useEffect(() => {
    fetchUsers.fetch({
      orderBy: [UserOrderBy.PIXELS_ASC],
      limit: 5,
    })
  }, []);

  return (
    <Card header="Most Points">
      {
        fetchUsers.loading && <i className="fa fa-spinner fa-spin" />
      }
      {
        fetchUsers.data?.map(_ => (
          <SmallUserProfileContainer key={`most_activity_points_${_.id}`} user={_} />
        ))
      }
    </Card>
  )
}