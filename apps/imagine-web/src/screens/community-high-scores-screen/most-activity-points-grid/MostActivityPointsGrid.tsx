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
      <div style={{ display: 'flex', flex: 1, gap: 16 }}>
        {
          fetchUsers.loading && <i className="fa fa-spinner fa-spin" />
        }
        {
          fetchUsers.data?.map(_ => (
            <SmallUserProfileContainer key={`most_activity_points_${_.id}`} user={_ as any}>
              <div style={{ display: 'flex', flex: 1, gap: 8, justifyContent: 'center', alignContent: 'center' }}>
                <img src="/img/duckets.svg" />
                <b>{Number(_.activityPoints).toLocaleString()} Duckets</b>
              </div>
            </SmallUserProfileContainer>
          ))
        }
      </div>
    </Card>
  )
}