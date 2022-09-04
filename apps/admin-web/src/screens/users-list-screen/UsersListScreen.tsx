import React, {useEffect, useState} from 'react';
import {useFetchUsers, useSearchData} from '@imagine-cms/web';
import {UserOnlineStatus, UserWire} from '@imagine-cms/types';
import {DataTable} from '../../components/data-table/DataTable';
import {LoadingOverlay} from '../../components/loading-overlay/LoadingOverlay';

export function UsersListScreen() {
  const {runQuery, data, loading} = useFetchUsers();
  const [searchTerm, setSearchTerm ] = useState('');
  const filteredUsers = useSearchData(data?.users, searchTerm);

  useEffect(() => {
    runQuery();
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Users</h4>
              <div className="table-responsive">
                <LoadingOverlay loading={loading}>
                  <input className="form-control" value={searchTerm} onChange={e => setSearchTerm(e?.target?.value ?? '')} placeholder="Search..." />
                  <br />
                  <DataTable<UserWire>
                    columns={[
                      {
                        Header: 'Username',
                        accessor: 'username',
                      },
                      {
                        Header: 'Email',
                        accessor: 'email',
                      },
                      {
                        Header: 'Motto',
                        accessor: 'motto',
                      },
                      {
                        Header: 'IP Address',
                        accessor: 'ipLast',
                      },
                      {
                        Header: 'Status',
                        accessor: 'onlineStatus',
                      },
                      {
                        Header: 'Last Online',
                        accessor: 'lastOnline',
                      },
                    ]}
                    data={filteredUsers}
                  />
                </LoadingOverlay>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
