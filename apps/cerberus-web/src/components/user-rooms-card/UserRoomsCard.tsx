import React, { useEffect } from 'react';
import { Card } from '../../blocks/card/Card';
import { useRoomFetchMany } from '@imagine-cms/client';
import { UserRoomsCardProps } from './UserRoomsCard.types';
import { Button } from '../../blocks/button/Button';
import { Link } from 'wouter';

export function UserRoomsCard({ user }: UserRoomsCardProps) {
  const fetchRooms = useRoomFetchMany();

  useEffect(() => {
    fetchRooms.fetch({ userIDs: [user.id] });
  }, [user.id]);

  return (
    <Card header={<>Rooms ({fetchRooms.data?.length ?? 0})</>}>
      {
        fetchRooms.loading && (
          <div style={{ display: 'flex', gap: 8 }}>
            <i className="fa fa-spinner fa-spin" />
            Loading support tickets...
          </div>
        )
      }
      {
        fetchRooms.data?.length === 0 && <p>No rooms found</p>
      }
      <div style={{ display: 'flex', gap: 16 }}>
        {
          fetchRooms.data?.map(_ => (
            <Link key={`room_${_.id}`} href={`/rooms/${_.id}`}>
              <Button>{_.name}</Button>
            </Link>
          ))
        }
      </div>
    </Card>
  )
}