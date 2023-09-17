import React from 'react';
import { Card } from '../../components/card/Card';
import { RadioRequestsTableLazy } from '../../components/radio-requests-table/RadioRequestsTable.lazy';

export function RadioScreen() {
  return (
    <>
      <Card header="Radio Requests">
        <RadioRequestsTableLazy />
      </Card>
    </>
  )
}