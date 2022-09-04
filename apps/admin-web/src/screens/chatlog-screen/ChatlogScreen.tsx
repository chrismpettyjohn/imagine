import DayJS from 'dayjs';
import {ChatlogWire} from '@imagine-cms/types';
import React, {useContext, useEffect} from 'react';
import {DataTable} from '../../components/data-table/DataTable';
import {configContext, useFetchChatlog} from '@imagine-cms/web';
import {LoadingOverlay} from '../../components/loading-overlay/LoadingOverlay';

export function ChatlogScreen() {
  const {config} = useContext(configContext);
  const {runQuery, data, loading, error} = useFetchChatlog();

  useEffect(() => {
    runQuery();
  }, []);

  console.log(error);

  return (
    <div className="row">
      <div className="col-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Chatlog</h4>
            <div className="table-responsive">
              <LoadingOverlay loading={loading}>
                <DataTable<ChatlogWire>
                  columns={[
                    {
                      header: '',
                      render: chatlog => <img src="https://imager.habboon.pw/?figure=fa-8332-1328-95.hr-4024-34.ca-3982-92-1410.hd-95945-1.lg-4369-94-92.cc-50030-1410.sh-6262-1410.ch-3881-94.he-3821-1410-1410.ha-4355-92-1322&direction=3&head_direction=3&gesture=sml&headonly=1" loading="lazy" />,
                    },
                    {
                      header: 'User',
                      render: chatlog => chatlog.userID,
                    },
                    {
                      header: 'Room',
                      render: chatlog => chatlog.roomID,
                    },
                    {
                      header: 'Message',
                      render: chatlog => chatlog.message,
                    },
                    {
                      header: 'Created At',
                      render: chatlog => DayJS(chatlog.createdAt).format(config!.dateFormat),
                    },
                  ]}
                  data={data?.chatlogs}
                />
              </LoadingOverlay>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
