import React, { useEffect } from 'react';
import { DataTable } from '../../components/data-table/DataTable';
import { UserFragment, useUserFetchMany } from '@imagine-cms/client';
import { LoadingOverlay } from '../../components/loading-overlay/LoadingOverlay';

export function UsersListScreen() {
  const fetchUsers = useUserFetchMany();

  useEffect(() => {
    fetchUsers.fetch({ limit: 1000 });
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Users</h4>
              <div className="table-responsive">
                <LoadingOverlay loading={fetchUsers.loading}>
                  <DataTable<UserFragment>
                    columns={[
                      {
                        header: '',
                        render: user => <img src={`https://imager.habboon.pw/?figure=${user.look}&direction=3&head_direction=3&gesture=sml&headonly=1`} loading="lazy" />,
                      },
                      {
                        header: 'Username',
                        render: user => user.username,
                      },
                      {
                        header: 'Motto',
                        render: user => user.motto,
                      },
                      {
                        header: 'Status',
                        render: user => {
                          const [color, label] = user.onlineStatus === 1
                            ? ['success', 'Online']
                            : ['danger', 'Offline']
                          return <span className={`badge badge-${color}`}>{label}</span>
                        }
                      },
                      {
                        header: 'Tools',
                        render: user => (
                          <>
                            <button className="btn btn-primary mr-2">
                              <i className="fas fa-pencil" />
                            </button>
                            <button className="btn btn-danger">
                              <i className="fas fa-trash" />
                            </button>
                          </>
                        )

                      }
                    ]}
                    data={fetchUsers.data ?? []}
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
