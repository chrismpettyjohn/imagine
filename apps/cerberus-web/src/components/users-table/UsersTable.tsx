import React, { useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { useUserFetchMany } from '@imagine-cms/client';
import { USERS_TABLE_COLUMNS } from './UsersTable.const';


export function UsersTable() {
  const fetchUsers = useUserFetchMany();

  useEffect(() => {
    fetchUsers.fetch({ limit: 1000 });
  }, []);

  console.log(fetchUsers)

  return (
    <DataTable
      columns={USERS_TABLE_COLUMNS}
      data={fetchUsers.data ?? []}
    />
  );
};

export default UsersTable;