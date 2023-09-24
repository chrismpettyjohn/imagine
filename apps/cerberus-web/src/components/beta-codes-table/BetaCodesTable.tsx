import React, { useEffect, useMemo } from 'react';
import DataTable from 'react-data-table-component';
import { useBetaCodeFetchMany } from '@imagine-cms/client';
import { generateBetaCodesTableColumns } from './BetaCodesTable.const';


export function BetaCodesTable() {
  const fetchBetaCodes = useBetaCodeFetchMany();

  const onFetchBetaCodes = async () => {
    await fetchBetaCodes.fetch({ limit: 25 });
  }

  const columns = useMemo(() => {
    return generateBetaCodesTableColumns(onFetchBetaCodes);
  }, [onFetchBetaCodes]);

  useEffect(() => {
    fetchBetaCodes.fetch({ limit: 25 });
  }, []);

  return (
    <DataTable
      columns={columns}
      data={fetchBetaCodes.data ?? []}
    />
  );
};

export default BetaCodesTable;