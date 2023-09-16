import React, { useContext } from 'react';
import { Card } from '../../blocks/card/Card';
import { sessionContext } from '@imagine-cms/web';

export function DashboardScreen() {
  const { session } = useContext(sessionContext);
  return (
    <>
      <h1>Dashboard</h1>
      <Card>
        <p>Welcome back, <b>{session!.username}</b></p>
      </Card>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <Card header="Hotel Stats">

        </Card>
        <Card header="Hotel Health">

        </Card>

        <Card header="Online Staff">

        </Card>
        <Card header="Online Users">

        </Card>
        <Card header="User Trends">

        </Card>
        <Card header="Online Staff">

        </Card>
        <Card header="Pending Reports">

        </Card>
        <Card header="Pending Staff Applications">

        </Card>
        <Card header="Pending Radio Requests">

        </Card>
      </div>
    </>
  )
}
