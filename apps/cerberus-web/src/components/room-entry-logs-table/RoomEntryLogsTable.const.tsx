import React from 'react';
import DayJS from 'dayjs';
import { TableColumn } from "react-data-table-component";
import { RoomEnterLogFragment } from '@imagine-cms/client';
import { SmallUserContainer } from '../small-user-container/SmallUserContainer';

export const ROOMS_ENTRY_LOGS_TABLE_COLUMNS: TableColumn<RoomEnterLogFragment>[] = [
  {
    name: 'User',
    cell: ({ user }) => (
      <div style={{ padding: 8 }}>
        <SmallUserContainer user={user} style={{ width: 200 }} />
      </div>
    ),
  },

  {
    name: 'Entered At',
    selector: roomEntryLog => roomEntryLog.enterTimestamp,
    cell: ({ enterTimestamp }) => DayJS.unix(enterTimestamp).format('MM-DD-YYYY hh-mm-a'),
  },
  {
    name: 'Exited At',
    selector: roomEntryLog => roomEntryLog.exitTimestamp,
    cell: ({ exitTimestamp }) => DayJS.unix(exitTimestamp).format('MM-DD-YYYY hh-mm-a'),
  },
]