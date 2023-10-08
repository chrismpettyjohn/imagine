import { Grid } from '../../components/grid/Grid';
import React, { useEffect, useState } from 'react';
import { useGroupFetchMany } from '@imagine-cms/client';
import { GridLarge } from '../../components/grid/Grid.remix';
import { ButtonNoBorder } from '../../components/button/Button.remix';
import { GroupGridContainer } from '../../components/group-grid-container/GroupGridContainer';
import { GroupGridContainerMock } from '../../components/group-grid-container/GroupGridContainerMock';

const GROUP_PAGE_SIZE = 16;

export function GroupListScreen() {
  const [page, setPage] = useState(0)
  const fetchGroups = useGroupFetchMany();

  const canGoUp = (fetchGroups?.data?.length ?? 0) >= GROUP_PAGE_SIZE

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
    fetchGroups.fetch({ skip: page * GROUP_PAGE_SIZE, limit: GROUP_PAGE_SIZE });
  }, [page])

  return (
    <>
      <div style={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}>
        <h1>Groups</h1>
        {
          page > 0 && (
            <h2>Page {page + 1}</h2>
          )
        }
      </div>
      <Grid>
        {
          fetchGroups.loading && (
            <>
              <GroupGridContainerMock />
              <GroupGridContainerMock />
              <GroupGridContainerMock />
              <GroupGridContainerMock />
              <GroupGridContainerMock />
              <GroupGridContainerMock />
              <GroupGridContainerMock />
              <GroupGridContainerMock />
              <GroupGridContainerMock />
              <GroupGridContainerMock />
              <GroupGridContainerMock />
              <GroupGridContainerMock />
              <GroupGridContainerMock />
              <GroupGridContainerMock />
              <GroupGridContainerMock />
              <GroupGridContainerMock />
            </>
          )
        }
        {
          fetchGroups.data?.map(_ => (
            <GroupGridContainer key={`group_${_.id}`} group={_} />
          ))
        }
      </Grid>
      <GridLarge style={{ marginTop: 16 }}>
        {canGoDown ?
          <ButtonNoBorder onClick={goBackOnePage}>
            <i className={fetchGroups.loading ? 'fa fa-spinner fa-spin' : 'fa fa-arrow-left'} />
          </ButtonNoBorder>
          : <div />}
        {
          canGoUp && (
            <ButtonNoBorder onClick={goUpOnePage}>
              <i className={fetchGroups.loading ? 'fa fa-spinner fa-spin' : 'fa fa-arrow-right'} />
            </ButtonNoBorder>
          )
        }
      </GridLarge>
    </>
  )
}