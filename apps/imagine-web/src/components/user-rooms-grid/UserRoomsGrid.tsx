import { Card } from '../card/Card';
import React, { useEffect } from 'react';
import { useRoomFetchMany } from '@imagine-cms/client';
import { UserRoomsGridProps } from './UserRoomsGrid.types';
import { UserRoomContainerGridElement } from './UserRoomsGrid.styled';
import { RoomGridContainer } from '../room-grid-container/RoomGridContainer';

export function UserRoomsGrid({ user }: UserRoomsGridProps) {
  const fetchRooms = useRoomFetchMany();

  useEffect(() => {
    fetchRooms.fetch({ userIDs: [user.id], limit: 8 })
  }, [user.id]);

  return (
    <Card header="My Rooms">
      {
        fetchRooms.loading && <i className="fa fa-spinner fa-spin" />
      }
      {
        fetchRooms.data?.length === 0 && <p>You don't own any rooms</p>
      }
      <UserRoomContainerGridElement>

        {
          fetchRooms.data?.map(_ => (
            <RoomGridContainer key={`my_rooms_${_.id}`} room={_} />
          ))
        }
      </UserRoomContainerGridElement>
    </Card>
  )
}