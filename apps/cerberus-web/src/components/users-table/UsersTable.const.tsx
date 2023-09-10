import React from 'react';
import { UserFragment } from '@imagine-cms/client';
import { Avatar } from '../../blocks/avatar/Avatar';
import { TableColumn } from "react-data-table-component";
import { Link } from 'wouter';

export const USERS_TABLE_COLUMNS: TableColumn<UserFragment>[] = [
  {
    name: 'ID',
    selector: user => user.id,
  },
  {
    name: 'Avatar',
    selector: user => user.look,
    cell: ({ look }) => <Avatar look={look} headOnly />,
  },
  {
    name: 'Username',
    selector: user => user.username,
  },
  {
    name: 'Rank',
    selector: user => user.rankID,
  },
  {
    name: 'Credits',
    selector: user => user.credits,
  },
  {
    name: 'Pixels',
    selector: user => user.activityPoints,
  },
  {
    name: 'Points',
    selector: user => user.vipPoints,
  },
  {
    name: 'Social Media',
    cell: (user: UserFragment) => (
      <>
        bitch ass hoe
      </>
    )
  },
  {
    name: 'Tools',
    cell: (user: UserFragment) => (
      <>
        <Link href={`/users/${user.id}`}>
          <button>edit</button>
        </Link>
        <button>delete</button>
        <button>ban</button>
      </>
    )
  },
]