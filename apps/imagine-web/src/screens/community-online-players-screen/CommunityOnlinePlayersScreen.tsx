import React, { useEffect } from 'react';
import { Card } from '../../components/card/Card';
import { Grid } from '../../components/grid/Grid';
import { useUserFetchMany } from '@imagine-cms/client';
import { SmallUserProfileContainer } from '../../components/small-user-profile-container/SmallUserProfileContainer';
import { SmallUserProfileContainerMock } from '../../components/small-user-profile-container/SmallUserProfileContainerMock';

export function CommunityOnlinePlayersScreen() {
  const { data, fetch, loading } = useUserFetchMany();

  useEffect(() => {
    fetch({ online: true, limit: 1000 });
  }, []);

  return (
    <Card header={<>{loading && <i className="fa fa-spinner fa-spin" style={{ marginRight: 8 }} />}Online Users</>}>
      <Grid>
        {
          loading && (
            <>
              <SmallUserProfileContainerMock />
              <SmallUserProfileContainerMock />
              <SmallUserProfileContainerMock />
              <SmallUserProfileContainerMock />
            </>
          )
        }
        {
          data?.map(user => (
            <SmallUserProfileContainer key={`online_user_${user.id}`} user={user as any} showOnlineStatus={false} />
          ))
        }
      </Grid>
    </Card>
  )
}
