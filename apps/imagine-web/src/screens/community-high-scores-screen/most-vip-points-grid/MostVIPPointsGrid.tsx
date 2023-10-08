import React, { useEffect, useState } from 'react';
import { Card } from '../../../components/card/Card';
import { Grid } from '../../../components/grid/Grid';
import { GridLarge } from '../../../components/grid/Grid.remix';
import { UserOrderBy, useUserFetchMany } from '@imagine-cms/client';
import { ButtonNoBorder } from '../../../components/button/Button.remix';
import { SmallUserProfileContainer } from '../../../components/small-user-profile-container/SmallUserProfileContainer';

const USER_PAGE_SIZE = 8;

export function MostVIPPointsGrid() {
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
      orderBy: [UserOrderBy.POINTS_ASC],
      skip: USER_PAGE_SIZE * page,
      limit: USER_PAGE_SIZE,
    })
  }, [page]);

  return (
    <Card header={<>Most Diamonds <small>Page {page + 1}</small></>}>
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
    </Card>
  )
}