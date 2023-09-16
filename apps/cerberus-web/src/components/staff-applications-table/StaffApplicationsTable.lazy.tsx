import React, { Suspense, lazy } from 'react';

const StaffApplicationsTable = lazy(() => import('./StaffApplicationsTable'));

const LOADING_FALLBACK = (
  <>
    <i className="fa fa-spinner fa-spin" />
    Loading staff applications...
  </>
)

export function StaffApplicationsTableLazy() {
  return (
    <Suspense fallback={LOADING_FALLBACK}>
      <StaffApplicationsTable />
    </Suspense>
  )
}