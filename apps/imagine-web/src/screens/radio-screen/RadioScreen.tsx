import React from 'react';
import { Card } from '../../components/card/Card';
import { RadioRequestsTableLazy } from '../../components/radio-requests-table/RadioRequestsTable.lazy';
import { CreateRadioRequestCard } from '../../components/create-radio-request-card/CreateRadioRequestCard';

export function RadioScreen() {
  return (
    <>
      <Card header="Radio Requests">
        <RadioRequestsTableLazy />
      </Card>
      <br />
      <CreateRadioRequestCard onCreation={() => location.reload()} />
    </>
  )
}