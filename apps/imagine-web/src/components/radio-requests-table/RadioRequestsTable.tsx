import React, { useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { useRadioRequestFetchMany } from '@imagine-cms/client';
import { RADIO_REQUEST_TABLE_COLUMNS } from './RadioRequestsTable.const';


export function RadioRequestsTable() {
  const fetchRadioRequests = useRadioRequestFetchMany();

  useEffect(() => {
    fetchRadioRequests.fetch({ limit: 25 });
  }, []);

  return (
    <DataTable
      columns={RADIO_REQUEST_TABLE_COLUMNS}
      data={fetchRadioRequests.data ?? []}
    />
  );
};

export default RadioRequestsTable;