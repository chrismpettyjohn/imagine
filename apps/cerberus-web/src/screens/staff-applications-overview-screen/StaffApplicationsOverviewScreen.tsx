import React from 'react';
import { Card } from '../../blocks/card/Card';
import { StaffApplicationsTableLazy } from '../../components/staff-applications-table/StaffApplicationsTable.lazy';

export function StaffApplicationsOverviewScreen() {
  return (
    <>
      <Card header="Staff Applications">
        <StaffApplicationsTableLazy />
      </Card>
    </>
  )
}