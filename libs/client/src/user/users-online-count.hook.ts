import { useLazyQuery } from "@apollo/client";
import { USERS_ONLINE_COUNT_QUERY, UsersOnlineCountQueryResponse } from "./users-online-count.query";


export interface UseUsersOnlineCountResponse {
  fetch(): Promise<number>;
  error?: Error;
  loading: boolean;
  data?: number;
}

export function useUsersOnlineCount(): UseUsersOnlineCountResponse {
  const [getUsersOnlineCount, { loading, error, data }] = useLazyQuery<UsersOnlineCountQueryResponse>(USERS_ONLINE_COUNT_QUERY);

  const onFetchUsers = async (): Promise<number> => {
    const matchingUsers = await getUsersOnlineCount({ fetchPolicy: "network-only" })
    return matchingUsers.data!.usersOnlineCount;
  }

  return {
    fetch: onFetchUsers,
    error,
    loading,
    data: data?.usersOnlineCount,
  }
}