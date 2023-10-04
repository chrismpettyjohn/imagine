import { Card } from '../card/Card';
import { Grid } from '../grid/Grid';
import React, { useEffect } from 'react';
import { useRoomFetchMany } from '@imagine-cms/client';
import { UserRoomsGridProps } from './UserRoomsGrid.types';
import { RoomGridContainer } from '../room-grid-container/RoomGridContainer';
import { RoomGridContainerMock } from '../room-grid-container/RoomGridContainerMock';

export function UserRoomsGrid({ user }: UserRoomsGridProps) {
  const fetchRooms = useRoomFetchMany();

  useEffect(() => {
    fetchRooms.fetch({ userIDs: [user.id], limit: 4 })
  }, [user.id]);

  return (
    <Card header="My Rooms" headerImage='https://www.habboassets.com/assets/images/catalog/icons/icon_206.png'>
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
    </Card>
  )
}