import { useLazyQuery } from "@apollo/client";
import { GroupFragment } from "./group.fragment";
import { GroupFilterOneInput } from "./group.input";
import { GROUP_FETCH_ONE_QUERY, GroupFetchOneQueryResponse, GroupFetchOneQueryVariables } from "./group-fetch-one.query";

export interface UseGroupFetchOneResponse {
  fetch(filter: GroupFilterOneInput): Promise<GroupFragment>;
  error?: Error;
  loading: boolean;
  data?: GroupFragment;
}

export function useGroupFetchOne(): UseGroupFetchOneResponse {
  const [getGroups, { loading, error, data }] = useLazyQuery<GroupFetchOneQueryResponse, GroupFetchOneQueryVariables>(GROUP_FETCH_ONE_QUERY);

  const onFetchGroups = async (filter: GroupFilterOneInput): Promise<GroupFragment> => {
    const matchingGroups = await getGroups({ fetchPolicy: "network-only", variables: { fetchPolicy: "network-only", filter } })
    return matchingGroups.data!.group;
  }

  return {
    fetch: onFetchGroups,
    error,
    loading,
    data: data?.group ?? undefined,
  }
}