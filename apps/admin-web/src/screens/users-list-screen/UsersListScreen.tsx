import DayJS from 'dayjs';
import React, {useContext, useEffect} from 'react';
import {UserOnlineStatus, UserWire} from '@imagine-cms/types';
import {DataTable} from '../../components/data-table/DataTable';
import {configContext, useFetchUsers} from '@imagine-cms/web';
import {LoadingOverlay} from '../../components/loading-overlay/LoadingOverlay';

export function UsersListScreen() {
  const {config} = useContext(configContext);
  const {runQuery, data, error, loading} = useFetchUsers();

  console.log(error);

  useEffect(() => {
    runQuery();
  }, [runQuery]);

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
                        header: '',
                        render: user => <img src={`https://imager.habboon.pw/?figure=${user.look}&direction=3&head_direction=3&gesture=sml&headonly=1`} loading="lazy" />,
                      },
                      {
                        header: 'Username',
                        render: user => user.username,
                      },
                      {
                        header: 'Email',
                        render: user => user.email,
                      },
                      {
                        header: 'Motto',
                        render: user => user.motto,
                      },
                      {
                        header: 'IP Address',
                        render: user => user.ipLast,
                      },
                      {
                        header: 'Status',
                        render: user => {
                          const [color, label] = user.onlineStatus === UserOnlineStatus.Online
                            ? ['success', 'Online']
                            : ['danger', 'Offline']
                          return <span className={`badge badge-${color}`}>{label}</span>
                        }
                      },
                      {
                        header: 'Last Online',
                        render: user => user.lastOnline ? DayJS.unix(user.lastOnline).format(config!.dateFormat) : <span className="text-danger">Never</span>
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
                    data={data?.users}
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
