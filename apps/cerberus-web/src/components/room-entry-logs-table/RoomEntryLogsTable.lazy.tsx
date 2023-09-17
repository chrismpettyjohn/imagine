import React, { Suspense, lazy } from 'react';
import { RoomEntryLogsTableProps } from './RoomEntryLogsTable.types';

const RoomEntryLogsTable = lazy(() => import('./RoomEntryLogsTable'));

const LOADING_FALLBACK = (
  <>
    <i className="fa fa-spinner fa-spin" />
    Loading room entry logs...
  </>
)

export function RoomEntryLogsTableLazy({ ...props }: RoomEntryLogsTableProps) {
  return (
    <Suspense fallback={LOADING_FALLBACK}>
      <RoomEntryLogsTable {...props} />
    </Suspense>
  )
}