import React, { Suspense, lazy } from 'react';
import { BetaCodesTableProps } from './BetaCodesTable.types';

const BetaCodesTable = lazy(() => import('./BetaCodesTable'));

const LOADING_FALLBACK = (
  <>
    <i className="fa fa-spinner fa-spin" />
    Loading beta codes...
  </>
)

export function BetaCodesTableLazy({ ...props }: BetaCodesTableProps) {
  return (
    <Suspense fallback={LOADING_FALLBACK}>
      <BetaCodesTable {...props} />
    </Suspense>
  )
}