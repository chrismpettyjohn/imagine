import React, { useEffect, useState } from 'react';
import { Card } from '../../../components/card/Card';
import { Grid } from '../../../components/grid/Grid';
import { GridLarge } from '../../../components/grid/Grid.remix';
import { UserOrderBy, useUserFetchMany } from '@imagine-cms/client';
import { ButtonNoBorder } from '../../../components/button/Button.remix';
import { SmallUserProfileContainer } from '../../../components/small-user-profile-container/SmallUserProfileContainer';
import { SmallUserProfileContainerMock } from '../../../components/small-user-profile-container/SmallUserProfileContainerMock';

const USER_PAGE_SIZE = 4;

export function MostActivityPointsGrid() {
  const [page, setPage] = useState(0);
  const fetchUsers = useUserFetchMany();

  const canGoUp = (fetchUsers?.data?.length ?? 0) >= USER_PAGE_SIZE

  const canGoDown = page > 0;

  const goUpOnePage = () => {
    if (!canGoUp) {
      return;
    }
    setPage(_ => _ + 1);
  }

  const goBackOnePage = () => {
    if (!canGoDown) {
      return;
    }
    setPage(_ => _ - 1);
  }

  useEffect(() => {
    fetchUsers.fetch({
      orderBy: [UserOrderBy.PIXELS_ASC],
      skip: USER_PAGE_SIZE * page,
      limit: USER_PAGE_SIZE,
    })
  }, [page]);

  return (
    <Card header={<>Most Points <small>Page {page + 1}</small></>}>
      <Grid>
        {
          fetchUsers.loading && (
            <>
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
          fetchUsers.data?.map(_ => (
            <SmallUserProfileContainer key={`most_activity_points_${_.id}`} user={_ as any}>
              <div style={{ display: 'flex', flex: 1, gap: 8, justifyContent: 'center', alignContent: 'center' }}>
                <img src="/img/duckets.svg" loading="lazy" />
                <b>{Number(_.activityPoints).toLocaleString()} Duckets</b>
              </div>
            </SmallUserProfileContainer>
          ))
        }
      </Grid>
      <GridLarge>
        {canGoDown ?
          <ButtonNoBorder onClick={goBackOnePage}>
            <i className={fetchUsers.loading ? 'fa fa-spinner fa-spin' : 'fa fa-arrow-left'} />
          </ButtonNoBorder>
          : <div />}
        {
          canGoUp && (
            <ButtonNoBorder onClick={goUpOnePage}>
              <i className={fetchUsers.loading ? 'fa fa-spinner fa-spin' : 'fa fa-arrow-right'} />
            </ButtonNoBorder>
          )
        }
      </GridLarge>
    </Card >
  )
}