import React, { useEffect, useState } from 'react';
import { Grid } from '../../../components/grid/Grid';
import { Card } from '../../../components/card/Card';
import { UserOrderBy, useUserFetchMany } from '@imagine-cms/client';
import { SmallUserProfileContainer } from '../../../components/small-user-profile-container/SmallUserProfileContainer';
import { GridLarge } from '../../../components/grid/Grid.remix';
import { ButtonNoBorder } from '../../../components/button/Button.remix';
import { SmallUserProfileContainerMock } from '../../../components/small-user-profile-container/SmallUserProfileContainerMock';

const USER_PAGE_SIZE = 8;

export function MostCreditsGrid() {
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
      orderBy: [UserOrderBy.CREDITS_ASC],
      skip: USER_PAGE_SIZE * page,
      limit: USER_PAGE_SIZE,
    })
  }, [page]);

  return (
    <Card header={<>Most Credits <small>Page {page + 1}</small></>}>
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
            <SmallUserProfileContainer key={`most_credits_${_.id}`} user={_ as any}>
              <div style={{ display: 'flex', flex: 1, gap: 8, justifyContent: 'center', alignContent: 'center' }}>
                <img src="/img/credits.svg" />
                <b>{Number(_.credits).toLocaleString()} Credits</b>
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