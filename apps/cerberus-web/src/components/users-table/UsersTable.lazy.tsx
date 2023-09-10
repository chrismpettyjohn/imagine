import React, { Suspense, lazy } from 'react';

const UsersTable = lazy(() => import('./UsersTable'));

const LOADING_FALLBACK = (
  <>
    <i className="fa fa-spinner fa-spin" />
    Loading users...
  </>
)

export function UsersTableLazy() {
  return (
    <Suspense fallback={LOADING_FALLBACK}>
      <UsersTable />
    </Suspense>
  )
}