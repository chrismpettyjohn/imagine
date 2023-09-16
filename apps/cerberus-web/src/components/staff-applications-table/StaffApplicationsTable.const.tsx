import React from 'react';
import { Link } from 'wouter';
import { Button } from '../../blocks/button/Button';
import { TableColumn } from "react-data-table-component";
import { StaffApplicationFragment } from '@imagine-cms/client';
import { SmallUserContainer } from '../small-user-container/SmallUserContainer';

export const STAFF_APPLICATION_TABLE_COLUMNS: TableColumn<StaffApplicationFragment>[] = [
  {
    name: 'User ID',
    cell: staffApplication => (
      <div style={{ padding: 8 }}>
        <SmallUserContainer user={staffApplication.user} />
      </div>
    )
  },
  {
    name: 'Rank ID',
    selector: staffApplication => staffApplication.rankID,
  },
  {
    name: 'Accepted',
    selector: staffApplication => staffApplication.accepted,
  },
  {
    name: 'Reviewed By',
    cell: staffApplication => {
      if (!staffApplication.reviewingUser) {
        return 'N/A';
      }
      return (
        <div style={{ padding: 8 }}>
          <SmallUserContainer user={staffApplication.user} />
        </div>
      )
    },
  },
  {
    name: 'Reviewed At',
    selector: staffApplication => staffApplication.reviewedAt ?? 'N/A',
  },
  {
    name: 'Created At',
    selector: staffApplication => staffApplication.createdAt,
  },
  {
    name: 'Updated At',
    selector: staffApplication => staffApplication.updatedAt,
  },
  {
    name: 'Tools',
    cell: ({ id }) => (
      <div style={{ display: 'flex', padding: 8 }}>
        <Link href={`/staff-applications/${id}`}>
          <Button>
            <i className="fa fa-eye" /> View More
          </Button>
        </Link>
      </div>
    )
  },
]