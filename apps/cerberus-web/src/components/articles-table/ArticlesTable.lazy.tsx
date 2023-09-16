import React, { Suspense, lazy } from 'react';

const ArticlesTable = lazy(() => import('./ArticlesTable'));

const LOADING_FALLBACK = (
  <>
    <i className="fa fa-spinner fa-spin" />
    Loading articles...
  </>
)

export function ArticlesTableLazy() {
  return (
    <Suspense fallback={LOADING_FALLBACK}>
      <ArticlesTable />
    </Suspense>
  )
}