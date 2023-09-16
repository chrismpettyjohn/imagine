import React, { useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { useBetaCodeFetchMany } from '@imagine-cms/client';
import { BETA_CODES_TABLE_COLUMNS } from './BetaCodesTable.const';


export function BetaCodesTable() {
  const fetchBetaCodes = useBetaCodeFetchMany();

  useEffect(() => {
    fetchBetaCodes.fetch({ limit: 25 });
  }, []);

  return (
    <DataTable
      columns={BETA_CODES_TABLE_COLUMNS}
      data={fetchBetaCodes.data ?? []}
    />
  );
};

export default BetaCodesTable;