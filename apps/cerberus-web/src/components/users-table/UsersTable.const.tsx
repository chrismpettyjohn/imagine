import React from 'react';
import { UserFragment } from '@imagine-cms/client';
import { Avatar } from '../../blocks/avatar/Avatar';
import { TableColumn } from "react-data-table-component";
import { Link } from 'wouter';

export const USERS_TABLE_COLUMNS: TableColumn<UserFragment>[] = [
  {
    name: '',
    cell: ({ username, look }) => (
      <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
        <Avatar look={look} headOnly height={110} width={64} />
        <b style={{ marginTop: -40 }}>{username}</b>
      </div>
    ),
  },
  {
    name: 'Rank',
    selector: user => user.rankID,
  },
  {
    name: 'Credits',
    cell: ({ credits }) => credits.toLocaleString(),
  },
  {
    name: 'Pixels',
    cell: ({ activityPoints }) => activityPoints.toLocaleString(),
  },
  {
    name: 'Points',
    cell: ({ vipPoints }) => vipPoints.toLocaleString(),
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
        <Link href={`/users/${user.username}`}>
          <button>view</button>
        </Link>
      </>
    )
  },
]