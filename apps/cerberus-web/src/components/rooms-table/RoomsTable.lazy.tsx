import React, { Suspense, lazy } from 'react';

const RoomsTable = lazy(() => import('./RoomsTable'));

const LOADING_FALLBACK = (
  <>
    <i className="fa fa-spinner fa-spin" />
    Loading rooms...
  </>
)

export function RoomsTableLazy() {
  return (
    <Suspense fallback={LOADING_FALLBACK}>
      <RoomsTable />
    </Suspense>
  )
}