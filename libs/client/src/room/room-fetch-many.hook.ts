import { useLazyQuery } from "@apollo/client";
import { RoomFragment } from "./room.fragment";
import { RoomFilterManyInput } from "./room.input";
import { ROOM_FETCH_MANY_QUERY, RoomFetchManyQueryResponse, RoomFetchManyQueryVariables } from "./room-fetch-many.query";

export interface UseRoomFetchManyResponse {
  fetch(filter: RoomFilterManyInput): Promise<RoomFragment[]>;
  error?: Error;
  loading: boolean;
  data?: RoomFragment[];
}

export function useRoomFetchMany(): UseRoomFetchManyResponse {
  const [getRooms, { loading, error, data }] = useLazyQuery<RoomFetchManyQueryResponse, RoomFetchManyQueryVariables>(ROOM_FETCH_MANY_QUERY);

  const onFetchRooms = async (filter: RoomFilterManyInput): Promise<RoomFragment[]> => {
    const matchingRooms = await getRooms({ fetchPolicy: "network-only", variables: { filter } })
    return matchingRooms.data!.rooms;
  }

  return {
    fetch: onFetchRooms,
    error,
    loading,
    data: data?.rooms,
  }
}