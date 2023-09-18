import React from 'react';
import { Card } from '../../blocks/card/Card';
import { RadioRequestsTableLazy } from '../../components/radio-requests-table/RadioRequestsTable.lazy';

export function RadioOverviewScreen() {
  return (
    <>
      <Card header="Radio Requests" style={{ height: '100%' }}>
        <RadioRequestsTableLazy />
      </Card>
    </>
  )
}