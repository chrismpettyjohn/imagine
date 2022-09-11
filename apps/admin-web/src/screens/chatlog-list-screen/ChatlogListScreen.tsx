import DayJS from 'dayjs';
import {ChatlogWire} from '@imagine-cms/types';
import React, {useContext, useEffect} from 'react';
import {DataTable} from '../../components/data-table/DataTable';
import {configContext, useFetchChatlog} from '@imagine-cms/web';
import {LoadingOverlay} from '../../components/loading-overlay/LoadingOverlay';

export function ChatlogListScreen() {
  const {config} = useContext(configContext);
  const {runQuery, data, loading, error} = useFetchChatlog();

  useEffect(() => {
    runQuery();
  }, [runQuery]);

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
                      render: chatlog => <img src={`https://imager.habboon.pw/?figure=${chatlog.user?.look}&direction=3&head_direction=3&gesture=sml&headonly=1`} loading="lazy" />,
                    },
                    {
                      header: 'User',
                      render: chatlog => chatlog.user?.username,
                    },
                    {
                      header: 'Room',
                      render: chatlog => <>(#{chatlog.roomID}) {chatlog.room?.name}</>,
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
