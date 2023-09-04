import { useLazyQuery } from "@apollo/client";
import { UserFilterManyInput } from "./user.input";
import { UserFragment } from "./user.fragment";
import { USER_FETCH_MANY_QUERY, UserFetchManyResponse, UserFetchManyVariables } from "./user-fetch-many.query";


export interface UseUserFetchManyResponse {
  fetch(filter: UserFilterManyInput): Promise<UserFragment[]>;
  error?: Error;
  loading: boolean;
  data?: UserFragment[];
}

export function useUserFetchMany(): UseUserFetchManyResponse {
  const [getUsers, { loading, error, data }] = useLazyQuery<UserFetchManyResponse, UserFetchManyVariables>(USER_FETCH_MANY_QUERY);

  const onFetchUsers = async (filter: UserFilterManyInput): Promise<UserFragment[]> => {
    const matchingUsers = await getUsers({ variables: { filter } })
    return matchingUsers.data!.users;
  }

  return {
    fetch: onFetchUsers,
    error,
    loading,
    data: data?.users,
  }
}