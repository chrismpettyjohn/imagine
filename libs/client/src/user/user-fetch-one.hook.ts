import { useLazyQuery } from "@apollo/client";
import { UserFragment } from "./user.fragment";
import { UserFilterOneInput } from "./user.input";
import { USER_FETCH_ONE_QUERY, UserFetchOneResponse, UserFetchOneVariables } from "./use-fetch-one.query";

export interface UseUserFetchOneResponse {
  fetch(filter: UserFilterOneInput): Promise<UserFragment>;
  error?: Error;
  loading: boolean;
  data?: UserFragment;
}

export function useUserFetchOne(): UseUserFetchOneResponse {
  const [getUsers, { loading, error, data }] = useLazyQuery<UserFetchOneResponse, UserFetchOneVariables>(USER_FETCH_ONE_QUERY);

  const onFetchUsers = async (filter: UserFilterOneInput): Promise<UserFragment> => {
    const matchingUsers = await getUsers({ fetchPolicy: "network-only", variables: { filter } })
    return matchingUsers.data!.user;
  }

  return {
    fetch: onFetchUsers,
    error,
    loading,
    data: data?.user,
  }
}