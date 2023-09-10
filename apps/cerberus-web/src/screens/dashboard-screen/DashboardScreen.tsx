import React, { useContext } from 'react';
import { sessionContext } from '@imagine-cms/web';
import { Card } from '../../blocks/card/Card';

export function DashboardScreen() {
  const { session } = useContext(sessionContext);
  return (
    <>
      <h1>Dashboard</h1>
      <Card>
        <p>Welcome back, <b>{session!.username}</b></p>
      </Card>
    </>
  )
}
