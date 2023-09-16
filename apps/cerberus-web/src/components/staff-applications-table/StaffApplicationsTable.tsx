import React, { useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { useStaffApplicationFetchMany } from '@imagine-cms/client';
import { STAFF_APPLICATION_TABLE_COLUMNS } from './StaffApplicationsTable.const';


export function StaffApplicationsTable() {
  const fetchStaffApplications = useStaffApplicationFetchMany();

  useEffect(() => {
    fetchStaffApplications.fetch({ limit: 25 });
  }, []);

  return (
    <DataTable
      columns={STAFF_APPLICATION_TABLE_COLUMNS}
      data={fetchStaffApplications.data ?? []}
    />
  );
};

export default StaffApplicationsTable;