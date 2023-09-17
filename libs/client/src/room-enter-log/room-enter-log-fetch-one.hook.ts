import { useLazyQuery } from "@apollo/client";
import { RoomEnterLogFragment } from "./room-enter-log.fragment";
import { RoomEnterLogFilterOneInput } from "./room-enter-log.input";
import { ROOM_ENTER_LOG_FETCH_ONE_QUERY, RoomEnterLogFetchOneQueryResponse, RoomEnterLogFetchOneQueryVariables } from "./room-enter-log-fetch-one.query";

export interface UseRoomEnterLogFetchOneResponse {
  fetch(filter: RoomEnterLogFilterOneInput): Promise<RoomEnterLogFragment>;
  error?: Error;
  loading: boolean;
  data?: RoomEnterLogFragment;
}

export function useRoomEnterLogFetchOne(): UseRoomEnterLogFetchOneResponse {
  const [getRoomEnterLog, { loading, error, data }] = useLazyQuery<RoomEnterLogFetchOneQueryResponse, RoomEnterLogFetchOneQueryVariables>(ROOM_ENTER_LOG_FETCH_ONE_QUERY);

  const onFetchRoomEnterLogs = async (filter: RoomEnterLogFilterOneInput): Promise<RoomEnterLogFragment> => {
    const matchingRoomEnterLogs = await getRoomEnterLog({ variables: { filter } })
    return matchingRoomEnterLogs.data!.roomEnterLog;
  }

  return {
    fetch: onFetchRoomEnterLogs,
    error,
    loading,
    data: data?.roomEnterLog,
  }
}