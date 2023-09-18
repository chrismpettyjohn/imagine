import React from 'react';
import { Link } from 'wouter';
import { RoomFragment } from '@imagine-cms/client';
import { Button } from '../../blocks/button/Button';
import { TableColumn } from "react-data-table-component";
import { SmallUserContainer } from '../small-user-container/SmallUserContainer';

export const ROOMS_TABLE_COLUMNS: TableColumn<RoomFragment>[] = [
  {
    name: 'Room',
    cell: ({ id, name }) => (
      <Link to={`/rooms/${id}`}>
        {name}
      </Link>
    )
  },
  {
    name: 'Owned By',
    cell: room => (
      <div style={{ padding: 8 }}>
        {room.user ? <SmallUserContainer user={room.user} style={{ width: 200 }} /> : <span style={{ color: 'red' }}>User not found</span>}
      </div>
    ),
  },
  {
    name: 'Users',
    cell: ({ usersMax, usersNow }) => `${usersNow} / ${usersMax}`
  },
  {
    name: 'Tools',
    cell: ({ id }) => (
      <div style={{ display: 'flex', padding: 8 }}>
        <Link href={`/rooms/${id}`}>
          <Button>
            <i className="fa fa-eye" /> View More
          </Button>
        </Link>
      </div>
    )
  },
]