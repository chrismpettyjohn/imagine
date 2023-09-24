import { useLazyQuery } from "@apollo/client";
import { RankFilterOneInput } from "./rank.input";
import { RankFragment } from "./rank.fragment";
import { RANK_FETCH_ONE_QUERY, RankFetchOneResponse, RankFetchOneVariables } from "./rank-fetch-one.query";

export interface UseRankFetchOneResponse {
  fetch(filter: RankFilterOneInput): Promise<RankFragment>;
  error?: Error;
  loading: boolean;
  data?: RankFragment;
}

export function useRankFetchOne(): UseRankFetchOneResponse {
  const [getRank, { loading, error, data }] = useLazyQuery<RankFetchOneResponse, RankFetchOneVariables>(RANK_FETCH_ONE_QUERY);

  const onFetchRank = async (filter: RankFilterOneInput): Promise<RankFragment> => {
    const matchingRank = await getRank({ fetchPolicy: "network-only", variables: { filter } })
    return matchingRank.data!.rank;
  }

  return {
    fetch: onFetchRank,
    error,
    loading,
    data: data?.rank,
  }
}