import React from 'react';
import DataTable from 'react-data-table-component';
import { RadioRequestsTableProps } from './RadioRequestsTable.types';
import { RADIO_REQUEST_TABLE_COLUMNS } from './RadioRequestsTable.const';


export function RadioRequestsTable({ radioRequests }: RadioRequestsTableProps) {
  return (
    <DataTable
      columns={RADIO_REQUEST_TABLE_COLUMNS}
      data={radioRequests}
    />
  );
};
