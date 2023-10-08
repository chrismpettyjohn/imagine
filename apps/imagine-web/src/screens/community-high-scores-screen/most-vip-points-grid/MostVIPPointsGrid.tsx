import React, { useEffect } from 'react';
import { Card } from '../../../components/card/Card';
import { Grid } from '../../../components/grid/Grid';
import { UserOrderBy, useUserFetchMany } from '@imagine-cms/client';
import { SmallUserProfileContainer } from '../../../components/small-user-profile-container/SmallUserProfileContainer';

export function MostVIPPointsGrid() {
  const fetchUsers = useUserFetchMany();

  useEffect(() => {
    fetchUsers.fetch({
      orderBy: [UserOrderBy.POINTS_ASC],
      limit: 8,
    })
  }, []);

  return (
    <Card header="Most Diamonds">
      <Grid>
        {
          fetchUsers.loading && <i className="fa fa-spinner fa-spin" />
        }
        {
          fetchUsers.data?.map(_ => (
            <SmallUserProfileContainer key={`most_vip_points_${_.id}`} user={_ as any}>
              <div style={{ display: 'flex', flex: 1, gap: 8, justifyContent: 'center', alignContent: 'center' }}>
                <img src="/img/diamonds.svg" />
                <b>{Number(_.vipPoints).toLocaleString()} Diamonds</b>
              </div>
            </SmallUserProfileContainer>
          ))
        }
      </Grid>
    </Card>
  )
}