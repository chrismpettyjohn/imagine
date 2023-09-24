import { useLazyQuery } from "@apollo/client";
import { RoomFragment } from "./room.fragment";
import { RoomFilterOneInput } from "./room.input";
import { ROOM_FETCH_ONE_QUERY, RoomFetchOneQueryResponse, RoomFetchOneQueryVariables } from "./room-fetch-one.query";

export interface UseRoomFetchOneResponse {
  fetch(filter: RoomFilterOneInput): Promise<RoomFragment>;
  error?: Error;
  loading: boolean;
  data?: RoomFragment;
}

export function useRoomFetchOne(): UseRoomFetchOneResponse {
  const [getRooms, { loading, error, data }] = useLazyQuery<RoomFetchOneQueryResponse, RoomFetchOneQueryVariables>(ROOM_FETCH_ONE_QUERY);

  const onFetchRooms = async (filter: RoomFilterOneInput): Promise<RoomFragment> => {
    const matchingRooms = await getRooms({ fetchPolicy: "network-only", variables: { fetchPolicy: "network-only", filter } })
    return matchingRooms.data!.room;
  }

  return {
    fetch: onFetchRooms,
    error,
    loading,
    data: data?.room ?? undefined,
  }
}