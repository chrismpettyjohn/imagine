import React from 'react';
import { Card } from '../../blocks/card/Card';
import { RanksTableLazy } from '../../components/ranks-table/RanksTable.lazy';

export function PermissionsOverviewScreen() {
  return (
    <>
      <h1>Permissions</h1>
      <Card>
        <RanksTableLazy />
      </Card>
    </>
  )
}
