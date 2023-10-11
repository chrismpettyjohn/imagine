import { Card } from '../../../components/card/Card';
import { Grid } from '../../../components/grid/Grid';
import { useUserBadgeFetchMany } from '@imagine-cms/client';
import React, { useEffect, useMemo, useState } from 'react';
import { UsersWithBadgeProps } from './UsersWithBadge.types';
import { GridLarge } from '../../../components/grid/Grid.remix';
import { ButtonNoBorder } from '../../../components/button/Button.remix';
import { SmallUserProfileContainerMock } from '../../../components/small-user-profile-container/SmallUserProfileContainerMock';
import { SmallUserProfileContainerLazy } from '../../../components/small-user-profile-container/SmallUserProfileContainerLazy';

const USERS_PAGE_SIZE = 8;

export function UsersWithBadge({ badgeCode }: UsersWithBadgeProps) {
  const [page, setPage] = useState(0);
  const fetchUsers = useUserBadgeFetchMany();

  const usersWithBadgeHeader = useMemo(() => {
    return (
      <div style={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}>
        <div>Users with badge</div>
        {page > 0 && (
          <small>Page {page + 1}</small>
        )}
      </div>
    )
  }, [page]);

  const canGoUp = (fetchUsers?.data?.length ?? 0) >= USERS_PAGE_SIZE

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
    fetchUsers.fetch({ badgeCodes: [badgeCode], skip: page * USERS_PAGE_SIZE, limit: USERS_PAGE_SIZE })
  }, [badgeCode, page]);

  return (
    <Card header={usersWithBadgeHeader}>
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
              <SmallUserProfileContainerMock />
              <SmallUserProfileContainerMock />
              <SmallUserProfileContainerMock />
              <SmallUserProfileContainerMock />
            </>
          )
        }
        {
          fetchUsers.data?.map(_ => (
            <SmallUserProfileContainerLazy key={`user_badge_${badgeCode}_${_.userID}`} userID={_.userID} />
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