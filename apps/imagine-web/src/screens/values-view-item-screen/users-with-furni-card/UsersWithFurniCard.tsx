import { Card } from '../../../components/card/Card';
import { Grid } from '../../../components/grid/Grid';
import React, { useEffect, useMemo, useState } from 'react';
import { useUserFurnitureFetchMany } from '@imagine-cms/client';
import { GridLarge } from '../../../components/grid/Grid.remix';
import { UsersWithFurniCardProps } from './UsersWithFurniCard.types';
import { ButtonNoBorder } from '../../../components/button/Button.remix';
import { SmallUserProfileContainerLazy } from '../../../components/small-user-profile-container/SmallUserProfileContainerLazy';
import { SmallUserProfileContainerMock } from '../../../components/small-user-profile-container/SmallUserProfileContainerMock';

const USER_PAGE_SIZE = 12;

export function UsersWithFurniCard({ furnitureID }: UsersWithFurniCardProps) {
  const [page, setPage] = useState(0)
  const fetchUsers = useUserFurnitureFetchMany();

  const usersWithFurniHeader = useMemo(() => {
    return (
      <div style={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}>
        <div>Users with furni</div>
        {
          page > 0 && (
            <small>Page {page + 1}</small>
          )
        }
      </div>
    )
  }, [page]);

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
    fetchUsers.fetch({ skip: page * USER_PAGE_SIZE, limit: USER_PAGE_SIZE, itemIDs: [furnitureID] })
  }, [furnitureID, page]);

  return (
    <Card header={usersWithFurniHeader} style={{ height: '100%' }}>
      <Grid>
        {
          fetchUsers.loading && (
            <>
              <SmallUserProfileContainerMock />
              <SmallUserProfileContainerMock />
              <SmallUserProfileContainerMock />
              <SmallUserProfileContainerMock />
            </>
          )
        }
        {
          fetchUsers.data?.map(_ => (
            <SmallUserProfileContainerLazy key={`user_furni_${furnitureID}_${_.userID}`} userID={_.userID} />
          ))
        }
      </Grid>
      <GridLarge style={{ marginTop: 16 }}>
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