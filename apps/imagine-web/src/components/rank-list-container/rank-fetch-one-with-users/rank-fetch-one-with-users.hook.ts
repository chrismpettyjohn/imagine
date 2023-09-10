import { useLazyQuery } from "@apollo/client";
import { RankFilterOneInput } from "@imagine-cms/client";
import { RANK_FETCH_ONE_WITH_USERS_QUERY, RankFetchOneWithUsersQueryResponse, RankFetchOneWithUsersQueryVariables, RankWithUsersFragment } from "./rank-fetch-one-with-users.query";

export interface UseRankFetchOneResponse {
  fetch(filter: RankFilterOneInput): Promise<RankWithUsersFragment>;
  error?: Error;
  loading: boolean;
  data?: RankWithUsersFragment;
}

export function useRankFetchOneWithUsers(): UseRankFetchOneResponse {
  const [getRank, { loading, error, data }] = useLazyQuery<RankFetchOneWithUsersQueryResponse, RankFetchOneWithUsersQueryVariables>(RANK_FETCH_ONE_WITH_USERS_QUERY);

  const onFetchRank = async (filter: RankFilterOneInput): Promise<RankWithUsersFragment> => {
    const matchingRank = await getRank({ variables: { filter } })
    return matchingRank.data!.rank;
  }

  return {
    fetch: onFetchRank,
    error,
    loading,
    data: data?.rank,
  }
}