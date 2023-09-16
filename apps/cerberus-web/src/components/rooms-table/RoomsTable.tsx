import React, { useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { useRoomFetchMany } from '@imagine-cms/client';
import { ROOMS_TABLE_COLUMNS } from './RoomsTable.const';


export function RoomsTable() {
  const fetchRooms = useRoomFetchMany();

  useEffect(() => {
    fetchRooms.fetch({ limit: 25 });
  }, []);

  return (
    <DataTable
      columns={ROOMS_TABLE_COLUMNS}
      data={fetchRooms.data ?? []}
    />
  );
};

export default RoomsTable;