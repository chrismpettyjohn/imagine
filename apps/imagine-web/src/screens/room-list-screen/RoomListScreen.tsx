import { Grid } from '../../components/grid/Grid';
import { Card } from '../../components/card/Card';
import { useRoomFetchMany } from '@imagine-cms/client';
import React, { useEffect, useMemo, useState } from 'react';
import { GridLarge } from '../../components/grid/Grid.remix';
import { ButtonNoBorder } from '../../components/button/Button.remix';
import { RoomGridContainer } from '../../components/room-grid-container/RoomGridContainer';
import { RoomGridContainerMock } from '../../components/room-grid-container/RoomGridContainerMock';

const ROOM_PAGE_SIZE = 16;

export function RoomListScreen() {
  const [page, setPage] = useState(0)
  const fetchRooms = useRoomFetchMany();

  const roomsHeader = useMemo(() => {
    return (
      <div style={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}>
        <div>Rooms</div>
        {
          page > 0 && (
            <small>Page {page + 1}</small>
          )
        }
      </div>
    )
  }, [page]);

  const canGoUp = (fetchRooms?.data?.length ?? 0) >= ROOM_PAGE_SIZE

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
    fetchRooms.fetch({ skip: page * ROOM_PAGE_SIZE, limit: ROOM_PAGE_SIZE });
  }, [page])

  return (
    <Card header={roomsHeader}>
      <Grid>
        {
          fetchRooms.loading && (
            <>
              <RoomGridContainerMock />
              <RoomGridContainerMock />
              <RoomGridContainerMock />
              <RoomGridContainerMock />
              <RoomGridContainerMock />
              <RoomGridContainerMock />
              <RoomGridContainerMock />
              <RoomGridContainerMock />
              <RoomGridContainerMock />
              <RoomGridContainerMock />
              <RoomGridContainerMock />
              <RoomGridContainerMock />
              <RoomGridContainerMock />
              <RoomGridContainerMock />
              <RoomGridContainerMock />
              <RoomGridContainerMock />
            </>
          )
        }
        {
          fetchRooms.data?.map(_ => (
            <RoomGridContainer key={`Room_${_.id}`} room={_} />
          ))
        }
      </Grid>
      <GridLarge style={{ marginTop: 16 }}>
        {canGoDown ?
          <ButtonNoBorder onClick={goBackOnePage}>
            <i className={fetchRooms.loading ? 'fa fa-spinner fa-spin' : 'fa fa-arrow-left'} />
          </ButtonNoBorder>
          : <div />}
        {
          canGoUp && (
            <ButtonNoBorder onClick={goUpOnePage}>
              <i className={fetchRooms.loading ? 'fa fa-spinner fa-spin' : 'fa fa-arrow-right'} />
            </ButtonNoBorder>
          )
        }
      </GridLarge>
    </Card>
  )
}