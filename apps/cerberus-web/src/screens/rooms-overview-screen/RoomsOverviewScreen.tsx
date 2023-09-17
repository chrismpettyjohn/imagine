import React from 'react';
import { Card } from '../../blocks/card/Card';
import { RoomsTableLazy } from '../../components/rooms-table/RoomsTable.lazy';

export function RoomsOverviewScreen() {
  return (
    <>
      <h1>Rooms</h1>
      <Card>
        <RoomsTableLazy />
      </Card>
    </>
  )
}