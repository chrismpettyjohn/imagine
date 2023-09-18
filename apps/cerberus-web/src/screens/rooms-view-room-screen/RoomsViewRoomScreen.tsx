import { Link, useRoute } from 'wouter';
import React, { useEffect } from 'react';
import { Card } from '../../blocks/card/Card';
import { Input } from '../../blocks/input/Input';
import { useRoomFetchOne } from '@imagine-cms/client';
import { RoomEntryLogsTableLazy } from '../../components/room-entry-logs-table/RoomEntryLogsTable.lazy';
import { SmallUserContainer } from '../../components/small-user-container/SmallUserContainer';

export function RoomsViewRoomScreen() {
  const [, params] = useRoute<{ roomID: string }>('/rooms/:roomID');
  const roomID = Number(params!.roomID);
  const fetchRoom = useRoomFetchOne();

  useEffect(() => {
    fetchRoom.fetch({ id: roomID })
  }, [roomID]);

  return (
    <>

      <h1>
        <Link to="/rooms">
          <i className="fa fa-caret-left" style={{ marginRight: 8 }} />
        </Link>
        Rooms - #{roomID} {fetchRoom?.data?.name}
      </h1>
      {
        fetchRoom.data && (
          <>
            <Card header="Room Info">

              <label>Name</label>
              <Input type="text" value={fetchRoom.data.name} disabled />
              <div style={{ display: 'flex', gap: 16, width: '100%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <label>Current Users</label>
                  <Input type="text" value={fetchRoom.data.usersNow} disabled />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <label>Maximum Users</label>
                  <Input type="text" value={fetchRoom.data.usersMax} disabled />
                </div>
              </div>

              <div style={{ display: 'flex', flex: 1, gap: 16 }}>
                <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <label>Owned By</label>
                  {
                    fetchRoom.data.user && <SmallUserContainer user={fetchRoom.data.user} />
                  }
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }} />
              </div>
            </Card>
            <Card header="Entry Logs">
              <div style={{ maxHeight: 400, overflowY: 'auto' }}>
                <RoomEntryLogsTableLazy room={fetchRoom.data} />
              </div>
            </Card>
          </>
        )
      }
    </>
  )
}