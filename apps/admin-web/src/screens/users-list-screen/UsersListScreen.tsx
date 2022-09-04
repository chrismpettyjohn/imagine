import React, {useEffect} from 'react';
import {useFetchUsers} from '@imagine-cms/web';
import {UserOnlineStatus, UserWire} from '@imagine-cms/types';
import {DataTable} from '../../components/data-table/DataTable';
import {LoadingOverlay} from '../../components/loading-overlay/LoadingOverlay';

export function UsersListScreen() {
  const {runQuery, data, loading} = useFetchUsers();

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
                    data={data?.users ?? []}
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
