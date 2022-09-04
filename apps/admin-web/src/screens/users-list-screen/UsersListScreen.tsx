import React, {useEffect} from 'react';
import {useFetchUsers} from '@imagine-cms/web';
import {UserOnlineStatus} from '@imagine-cms/types';
import {LoadingOverlay} from '../../components/loading-overlay/LoadingOverlay';

export function UsersListScreen() {
  const {runQuery, data, loading} = useFetchUsers();

  console.log(data, loading);

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
                  <table className="table">
                    <thead>
                    <tr>
                      <th>Username</th>
                      <th>Email</th>
                      <th>Motto</th>
                      <th>IP Address</th>
                      <th>Status</th>
                      <th>Last Online</th>
                      <th>Manage</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                      data?.users?.map(user => (
                        <tr key={`user_${user.id}`}>
                          <td>{user.username}</td>
                          <td>{user.email}</td>
                          <td>{user.motto}</td>
                          <td>{user.ipLast}</td>
                          <td>
                            <label className={`badge ${user.onlineStatus === UserOnlineStatus.Offline ? 'badge-danger' : 'badge-success'}`}>
                              {user.onlineStatus === UserOnlineStatus.Offline ? 'Offline' : 'Online'}
                            </label>
                          </td>
                          <td>{user.lastOnline}</td>
                          <td><label className="badge badge-danger">Pending</label></td>
                        </tr>
                      ))
                    }
                    </tbody>
                  </table>
                </LoadingOverlay>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
