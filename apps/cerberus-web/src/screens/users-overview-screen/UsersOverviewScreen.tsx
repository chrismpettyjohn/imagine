import React from 'react';
import { Card } from '../../blocks/card/Card';
import { UsersTableLazy } from '../../components/users-table/UsersTable.lazy';


export function UsersOverviewScreen() {
  return (
    <>
      <h1>Users</h1>
      <Card>
        <UsersTableLazy />
      </Card>
    </>
  )
}
