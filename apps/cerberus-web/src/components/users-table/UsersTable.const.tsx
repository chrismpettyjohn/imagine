import React from 'react';
import { Link } from 'wouter';
import { Badge } from '../../blocks/badge/Badge';
import { UserFragment } from '@imagine-cms/client';
import { Button } from '../../blocks/button/Button';
import { TableColumn } from "react-data-table-component";
import { SmallUserContainer } from '../small-user-container/SmallUserContainer';

export const USERS_TABLE_COLUMNS: TableColumn<UserFragment>[] = [
  {
    name: 'User',
    cell: user => (
      <div style={{ padding: 8 }}>
        <SmallUserContainer user={user} style={{ width: 200 }} />
      </div>
    ),
  },
  {
    name: 'Rank',
    cell: ({ rank }) => (
      <Link to={`/permissions/${rank.id}`}>
        <Badge badge={{ code: rank.badgeCode as any }} />
        {rank.name}
      </Link>
    )
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
    name: 'Tools',
    cell: (user: UserFragment) => (
      <>
        <Link href={`/users/${user.username}`}>
          <Button>
            <i className="fa fa-eye" /> View More
          </Button>
        </Link>
      </>
    )
  },
]