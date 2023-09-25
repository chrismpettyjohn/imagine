import React, { useEffect } from 'react';
import { Card } from '../../components/card/Card';
import { useRadioRequestFetchMany } from '@imagine-cms/client';
import { RadioRequestsTable } from '../../components/radio-requests-table/RadioRequestsTable'
import { CreateRadioRequestCard } from '../../components/create-radio-request-card/CreateRadioRequestCard';

export function RadioScreen() {
  const fetchRadioRequests = useRadioRequestFetchMany();

  const onFetchRadioRequests = async () => {
    await fetchRadioRequests.fetch({ limit: 25 });
  }

  useEffect(() => {
    onFetchRadioRequests();
  }, []);

  return (
    <>
      <CreateRadioRequestCard onCreation={onFetchRadioRequests} />
      <br />
      <Card header="Radio Requests">
        {
          fetchRadioRequests.loading && (
            <>
              <i className="fa fa-spinner fa-spin" />
              Loading radio requests...
            </>
          )
        }
        <RadioRequestsTable radioRequests={fetchRadioRequests.data ?? []} />
      </Card>
    </>
  )
}