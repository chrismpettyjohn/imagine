import React from 'react';
import { Card } from '../../blocks/card/Card';
import { UsersTableLazy } from '../../components/users-table/UsersTable.lazy';


export function UsersOverviewScreen() {
  return (
    <>
      <Card header="Users" style={{ height: '100%' }}>
        <UsersTableLazy />
      </Card>
    </>
  )
}
