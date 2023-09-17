import { useLazyQuery } from "@apollo/client";
import { RoomEnterLogFragment } from "./room-enter-log.fragment";
import { RoomEnterLogFilterManyInput } from "./room-enter-log.input";
import { ROOM_ENTER_LOG_FETCH_MANY_QUERY, RoomEnterLogFetchManyQueryResponse, RoomEnterLogFetchManyQueryVariables } from "./room-enter-log-fetch-many.query";

export interface UseRoomEnterLogFetchManyResponse {
  fetch(filter: RoomEnterLogFilterManyInput): Promise<RoomEnterLogFragment[]>;
  error?: Error;
  loading: boolean;
  data?: RoomEnterLogFragment[];
}

export function useRoomEnterLogFetchMany(): UseRoomEnterLogFetchManyResponse {
  const [getRoomEnterLogs, { loading, error, data }] = useLazyQuery<RoomEnterLogFetchManyQueryResponse, RoomEnterLogFetchManyQueryVariables>(ROOM_ENTER_LOG_FETCH_MANY_QUERY);

  const onFetchRoomEnterLogs = async (filter: RoomEnterLogFilterManyInput): Promise<RoomEnterLogFragment[]> => {
    const matchingRoomEnterLogs = await getRoomEnterLogs({ variables: { filter } })
    return matchingRoomEnterLogs.data!.roomEnterLogs;
  }

  return {
    fetch: onFetchRoomEnterLogs,
    error,
    loading,
    data: data?.roomEnterLogs,
  }
}