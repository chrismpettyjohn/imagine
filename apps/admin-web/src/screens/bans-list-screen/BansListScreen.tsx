import DayJS from 'dayjs';
import {BanWire} from '@imagine-cms/types';
import React, {useContext, useEffect} from 'react';
import {configContext, useFetchBans} from '@imagine-cms/web';
import {DataTable} from '../../components/data-table/DataTable';
import {LoadingOverlay} from '../../components/loading-overlay/LoadingOverlay';

export function BansListScreen() {
  const {config} = useContext(configContext);
  const {runQuery, data, loading} = useFetchBans();

  useEffect(() => {
    runQuery();
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Bans</h4>
              <div className="table-responsive">
                <LoadingOverlay loading={loading}>
                  <DataTable<BanWire>
                    columns={[
                      {
                        header: '',
                        render: ban => <img src="https://imager.habboon.pw/?figure=fa-8332-1328-95.hr-4024-34.ca-3982-92-1410.hd-95945-1.lg-4369-94-92.cc-50030-1410.sh-6262-1410.ch-3881-94.he-3821-1410-1410.ha-4355-92-1322&direction=3&head_direction=3&gesture=sml&headonly=1" loading="lazy" />,
                      },
                      {
                        header: 'Username',
                        render: ban => ban.bannedUserID,
                      },
                      {
                        header: 'Added By',
                        render: ban => ban.addedByUserID,
                      },
                      {
                        header: 'Reason',
                        render: ban => ban.reason,
                      },
                      {
                        header: 'Created At',
                        render: ban => DayJS(ban.createdAt).format(config!.dateFormat!),
                      },
                      {
                        header: 'Expires At',
                        render: ban => DayJS(ban.expiresAt).format(config!.dateFormat!),
                      },
                      {
                        header: 'Tools',
                        render: ban => (
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
                    data={data?.bans}
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
