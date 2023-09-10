import React from 'react';
import { RanksTableLazy } from '../../components/ranks-table/RanksTable.lazy';

export function PermissionsOverviewScreen() {
  return (
    <>
      <h1>Permissions</h1>
      <RanksTableLazy />
    </>
  )
}
