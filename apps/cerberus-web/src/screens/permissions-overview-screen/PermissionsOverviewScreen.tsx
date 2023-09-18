import React from 'react';
import { Card } from '../../blocks/card/Card';
import { RanksTableLazy } from '../../components/ranks-table/RanksTable.lazy';

export function PermissionsOverviewScreen() {
  return (
    <>
      <Card header="Permissions">
        <RanksTableLazy />
      </Card>
    </>
  )
}
