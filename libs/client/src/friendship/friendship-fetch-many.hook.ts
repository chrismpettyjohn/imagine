import { useLazyQuery } from "@apollo/client";
import { FriendshipFragment } from "./friendship.fragment";
import { FriendshipFilterManyInput } from "./friendship.input";
import { FRIENDSHIP_FETCH_MANY_QUERY, FriendshipFetchManyQueryResponse, FriendshipFetchManyQueryVariables } from "./friendship-fetch-many.query";

export interface UseFriendshipFetchManyResponse {
  fetch(filter: FriendshipFilterManyInput): Promise<FriendshipFragment[]>;
  error?: Error;
  loading: boolean;
  data?: FriendshipFragment[];
}

export function useFriendshipFetchMany(): UseFriendshipFetchManyResponse {
  const [getFriendships, { loading, error, data }] = useLazyQuery<FriendshipFetchManyQueryResponse, FriendshipFetchManyQueryVariables>(FRIENDSHIP_FETCH_MANY_QUERY);

  const onFetchFriendships = async (filter: FriendshipFilterManyInput): Promise<FriendshipFragment[]> => {
    const matchingFriendships = await getFriendships({ fetchPolicy: "network-only", variables: { fetchPolicy: "network-only", filter } })
    return matchingFriendships.data!.friendships;
  }

  return {
    fetch: onFetchFriendships,
    error,
    loading,
    data: data?.friendships,
  }
}