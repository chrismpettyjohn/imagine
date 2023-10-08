import React, { useEffect, useState } from 'react';
import { Card } from '../../components/card/Card';
import { Grid } from '../../components/grid/Grid';
import { useUserFetchMany } from '@imagine-cms/client';
import { GridLarge } from '../../components/grid/Grid.remix';
import { ButtonNoBorder } from '../../components/button/Button.remix';
import { SmallUserProfileContainer } from '../../components/small-user-profile-container/SmallUserProfileContainer';
import { SmallUserProfileContainerMock } from '../../components/small-user-profile-container/SmallUserProfileContainerMock';

const USERS_PAGE_SIZE = 12;

export function CommunityOnlinePlayersScreen() {
  const [page, setPage] = useState(0);
  const { data, fetch, loading } = useUserFetchMany();

  const canGoDown = page > 0;
  const canGoUp = (data?.length ?? 0) >= USERS_PAGE_SIZE;

  const goBackOnePage = () => {
    if (!canGoDown) {
      return;
    }
    setPage(_ => _ - 1)
  };
  const goUpOnePage = () => {
    if (!canGoUp) {
      return;
    }
    setPage(_ => _ + 1);
  }


  useEffect(() => {
    fetch({ online: true, skip: page & USERS_PAGE_SIZE, limit: USERS_PAGE_SIZE });
  }, [page]);

  return (
    <Card header={<>{loading && <i className="fa fa-spinner fa-spin" style={{ marginRight: 8 }} />}Online Users {page > 0 && <small>Page {page + 1}</small>}</>}>
      <Grid>
        {
          loading && (
            <>
              <SmallUserProfileContainerMock />
              <SmallUserProfileContainerMock />
              <SmallUserProfileContainerMock />
              <SmallUserProfileContainerMock />
              <SmallUserProfileContainerMock />
              <SmallUserProfileContainerMock />
              <SmallUserProfileContainerMock />
              <SmallUserProfileContainerMock />
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
      <GridLarge>
        {canGoDown ?
          <ButtonNoBorder onClick={goBackOnePage}>
            <i className={loading ? 'fa fa-spinner fa-spin' : 'fa fa-arrow-left'} />
          </ButtonNoBorder>
          : <div />}
        {
          canGoUp && (
            <ButtonNoBorder onClick={goUpOnePage}>
              <i className={loading ? 'fa fa-spinner fa-spin' : 'fa fa-arrow-right'} />
            </ButtonNoBorder>
          )
        }
      </GridLarge>
    </Card>
  )
}
