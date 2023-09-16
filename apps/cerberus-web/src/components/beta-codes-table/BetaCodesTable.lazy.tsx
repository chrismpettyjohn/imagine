import React, { Suspense, lazy } from 'react';

const BetaCodesTable = lazy(() => import('./BetaCodesTable'));

const LOADING_FALLBACK = (
  <>
    <i className="fa fa-spinner fa-spin" />
    Loading beta codes...
  </>
)

export function BetaCodesTableLazy() {
  return (
    <Suspense fallback={LOADING_FALLBACK}>
      <BetaCodesTable />
    </Suspense>
  )
}