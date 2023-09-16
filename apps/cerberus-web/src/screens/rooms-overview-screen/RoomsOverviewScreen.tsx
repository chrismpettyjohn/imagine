import React from 'react';
import { RoomsTableLazy } from '../../components/rooms-table/RoomsTable.lazy';

export function RoomsOverviewScreen() {
  return (
    <>
      <h1>Rooms</h1>
      <RoomsTableLazy />
    </>
  )
}