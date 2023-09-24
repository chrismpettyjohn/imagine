import React, { useMemo } from 'react';
import DataTable from 'react-data-table-component';
import { BetaCodesTableProps } from './BetaCodesTable.types';
import { generateBetaCodesTableColumns } from './BetaCodesTable.const';


export function BetaCodesTable({ betaCodes, onChanges }: BetaCodesTableProps) {
  const columns = useMemo(() => {
    return generateBetaCodesTableColumns(onChanges);
  }, [onChanges]);

  return (
    <DataTable
      columns={columns}
      data={betaCodes ?? []}
    />
  );
};

export default BetaCodesTable;