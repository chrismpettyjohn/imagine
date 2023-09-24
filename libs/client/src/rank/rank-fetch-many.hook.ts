import { useLazyQuery } from "@apollo/client";
import { RankFragment } from "./rank.fragment";
import { RankFilterManyInput } from "./rank.input";
import { RankFetchManyResponse, RankFetchManyVariables, RANK_FETCH_MANY_QUERY } from "./rank-fetch-many.query";

export interface UseRankFetchManyResponse {
  fetch(filter: RankFilterManyInput): Promise<RankFragment[]>;
  error?: Error;
  loading: boolean;
  data?: RankFragment[];
}

export function useRankFetchMany(): UseRankFetchManyResponse {
  const [getRanks, { loading, error, data }] = useLazyQuery<RankFetchManyResponse, RankFetchManyVariables>(RANK_FETCH_MANY_QUERY);

  const onFetchRanks = async (filter: RankFilterManyInput): Promise<RankFragment[]> => {
    const matchingRanks = await getRanks({ fetchPolicy: "network-only", variables: { filter } })
    return matchingRanks.data!.ranks;
  }

  return {
    fetch: onFetchRanks,
    error,
    loading,
    data: data?.ranks,
  }
}