import React from 'react';
import { Link } from 'wouter';
import { RoomFragment } from '@imagine-cms/client';
import { Button } from '../../blocks/button/Button';
import { TableColumn } from "react-data-table-component";

export const ROOMS_TABLE_COLUMNS: TableColumn<RoomFragment>[] = [
  {
    name: 'Room',
    selector: room => room.name,
  },
  {
    name: 'Owned By',
    selector: room => room.userID,
  },
  {
    name: 'Max Users',
    selector: room => room.usersMax,
  },
  {
    name: 'Current Users',
    selector: room => room.usersNow,
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