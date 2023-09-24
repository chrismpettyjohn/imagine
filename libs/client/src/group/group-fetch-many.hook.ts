import { useLazyQuery } from "@apollo/client";
import { GroupFragment } from "./group.fragment";
import { GroupFilterManyInput } from "./group.input";
import { GROUP_FETCH_MANY_QUERY, GroupFetchManyQueryResponse, GroupFetchManyQueryVariables } from "./group-fetch-many.query";

export interface UseGroupFetchManyResponse {
  fetch(filter: GroupFilterManyInput): Promise<GroupFragment[]>;
  error?: Error;
  loading: boolean;
  data?: GroupFragment[];
}

export function useGroupFetchMany(): UseGroupFetchManyResponse {
  const [getGroups, { loading, error, data }] = useLazyQuery<GroupFetchManyQueryResponse, GroupFetchManyQueryVariables>(GROUP_FETCH_MANY_QUERY);

  const onFetchGroups = async (filter: GroupFilterManyInput): Promise<GroupFragment[]> => {
    const matchingGroups = await getGroups({ fetchPolicy: "network-only", variables: { fetchPolicy: "network-only", filter } })
    return matchingGroups.data!.groups;
  }

  return {
    fetch: onFetchGroups,
    error,
    loading,
    data: data?.groups,
  }
}