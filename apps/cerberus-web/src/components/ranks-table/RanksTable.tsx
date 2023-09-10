import React, { useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { useRankFetchMany } from '@imagine-cms/client';
import { RANKS_TABLE_COLUMNS } from './RanksTable.const';


export function RanksTable() {
  const fetchRanks = useRankFetchMany();

  useEffect(() => {
    fetchRanks.fetch({ limit: 25 });
  }, []);

  return (
    <DataTable
      columns={RANKS_TABLE_COLUMNS}
      data={fetchRanks.data ?? []}
    />
  );
};

export default RanksTable;