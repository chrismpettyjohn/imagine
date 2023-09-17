import React from 'react';
import { Card } from '../../blocks/card/Card';
import { RadioRequestsTableLazy } from '../../components/radio-requests-table/RadioRequestsTable.lazy';

export function RadioOverviewScreen() {
  return (
    <>
      <h1>Radio</h1>
      <Card>
        <RadioRequestsTableLazy />
      </Card>
    </>
  )
}