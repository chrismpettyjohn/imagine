import React from 'react';
import { UsersTableLazy } from '../../components/users-table/UsersTable.lazy';


export function UsersOverviewScreen() {
  return (
    <>
      <h1>Users</h1>
      <UsersTableLazy />
    </>
  )
}
