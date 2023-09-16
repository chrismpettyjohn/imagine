import React from 'react';
import { StaffApplicationsTableLazy } from '../../components/staff-applications-table/StaffApplicationsTable.lazy';

export function StaffApplicationsOverviewScreen() {
  return (
    <>
      <h1>Staff Applications</h1>
      <StaffApplicationsTableLazy />
    </>
  )
}