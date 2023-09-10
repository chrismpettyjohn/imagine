import React, { Suspense, lazy } from 'react';

const RanksTable = lazy(() => import('./RanksTable'));

const LOADING_FALLBACK = (
  <>
    <i className="fa fa-spinner fa-spin" />
    Loading users...
  </>
)

export function RanksTableLazy() {
  return (
    <Suspense fallback={LOADING_FALLBACK}>
      <RanksTable />
    </Suspense>
  )
}