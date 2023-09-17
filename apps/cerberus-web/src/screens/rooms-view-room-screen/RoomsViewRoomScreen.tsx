import { Link, useRoute } from 'wouter';
import React, { useEffect } from 'react';
import { Card } from '../../blocks/card/Card';
import { Input } from '../../blocks/input/Input';
import { useRoomFetchOne } from '@imagine-cms/client';
import { RoomRightsCard } from '../../components/room-rights-card/RoomRightsCard';
import { RoomTradeLogsCard } from '../../components/room-trade-logs-card/RoomTradeLogsCard';
import { RoomEntryLogsTableLazy } from '../../components/room-entry-logs-table/RoomEntryLogsTable.lazy';

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
              <Input type="text" value={fetchRoom.data.name} />
            </Card>
            <RoomEntryLogsTableLazy room={fetchRoom.data} />
            <RoomTradeLogsCard room={fetchRoom.data} />
            <RoomRightsCard room={fetchRoom.data} />
          </>
        )
      }
    </>
  )
}