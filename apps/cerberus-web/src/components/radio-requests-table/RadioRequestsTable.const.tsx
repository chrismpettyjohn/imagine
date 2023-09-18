import DayJS from 'dayjs';
import React from 'react';
import { TableColumn } from "react-data-table-component";
import { RadioRequestFragment } from '@imagine-cms/client';
import { SmallUserContainer } from '../small-user-container/SmallUserContainer';

export const RADIO_REQUEST_TABLE_COLUMNS: TableColumn<RadioRequestFragment>[] = [
  {
    name: 'User',
    cell: ({ user }) => (
      <div style={{ padding: 8 }}>
        <SmallUserContainer user={user} style={{ width: 200 }} />
      </div>
    )
  },
  {
    name: 'Song Request',
    selector: radioRequest => radioRequest.content,
  },
  {
    name: 'Status',
    selector: radioRequest => radioRequest.status,
  },
  {
    name: 'Reviewed By',
    cell: ({ reviewingUserID }) => reviewingUserID ?? 'N/A',
  },
  {
    name: 'Reviewed At',
    cell: ({ reviewedAt }) => reviewedAt ? DayJS.unix(reviewedAt).format('MM-DD-YYYY hh-mm-a') : 'N/A',
  },
  {
    name: 'Created At',
    cell: ({ createdAt }) => DayJS.unix(createdAt).format('MM-DD-YYYY hh-mm-a')
  },
]