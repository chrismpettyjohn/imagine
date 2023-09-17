import React, { useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { useRoomEnterLogFetchMany } from '@imagine-cms/client';
import { RoomEntryLogsTableProps } from './RoomEntryLogsTable.types';
import { ROOMS_ENTRY_LOGS_TABLE_COLUMNS } from './RoomEntryLogsTable.const';

export function RoomEntryLogsTable({ room }: RoomEntryLogsTableProps) {
  const fetchRoomEntryLogs = useRoomEnterLogFetchMany();

  useEffect(() => {
    fetchRoomEntryLogs.fetch({ roomIDs: [room.id] })
  }, [room.id]);

  return (
    <DataTable
      columns={ROOMS_ENTRY_LOGS_TABLE_COLUMNS}
      data={fetchRoomEntryLogs.data ?? []}
    />
  )
}

export default RoomEntryLogsTable