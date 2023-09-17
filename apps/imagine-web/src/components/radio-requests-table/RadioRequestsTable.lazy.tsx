import React, { Suspense, lazy } from 'react';

const RadioRequestsTable = lazy(() => import('./RadioRequestsTable'));

const LOADING_FALLBACK = (
  <>
    <i className="fa fa-spinner fa-spin" />
    Loading radio requests...
  </>
)

export function RadioRequestsTableLazy() {
  return (
    <Suspense fallback={LOADING_FALLBACK}>
      <RadioRequestsTable />
    </Suspense>
  )
}