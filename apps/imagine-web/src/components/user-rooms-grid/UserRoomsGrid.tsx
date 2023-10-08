import { Card } from '../card/Card';
import { Grid } from '../grid/Grid';
import { GridLarge } from '../grid/Grid.remix';
import React, { useEffect, useState } from 'react';
import { ButtonNoBorder } from '../button/Button.remix';
import { useRoomFetchMany } from '@imagine-cms/client';
import { UserRoomsGridProps } from './UserRoomsGrid.types';
import { RoomGridContainer } from '../room-grid-container/RoomGridContainer';
import { RoomGridContainerMock } from '../room-grid-container/RoomGridContainerMock';

const ROOMS_PAGE_SIZE = 4;

export function UserRoomsGrid({ user }: UserRoomsGridProps) {
  const [page, setPage] = useState(0);
  const fetchRooms = useRoomFetchMany();

  const canGoUp = (fetchRooms?.data?.length ?? 0) >= ROOMS_PAGE_SIZE

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
    fetchRooms.fetch({ userIDs: [user.id], skip: ROOMS_PAGE_SIZE * page, limit: ROOMS_PAGE_SIZE })
  }, [user.id, page]);

  return (
    <Card header={<>My Rooms {page > 0 && <small>Page {page + 1}</small>}</>} headerImage='https://www.habboassets.com/assets/images/catalog/icons/icon_206.png'>
      <Grid>
        {
          fetchRooms.loading && (
            <>
              <RoomGridContainerMock />
            </>
          )
        }
        {
          fetchRooms.data?.length === 0 && <p>You don't own any rooms</p>
        }

        {
          fetchRooms.data?.map(_ => (
            <RoomGridContainer key={`my_rooms_${_.id}`} room={_} />
          ))
        }
      </Grid>
      <GridLarge>
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