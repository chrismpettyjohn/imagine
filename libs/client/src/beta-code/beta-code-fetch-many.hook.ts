import { useLazyQuery } from "@apollo/client";
import { BetaCodeFragment } from "./beta-code.fragment";
import { BetaCodeFilterManyInput } from "./beta-code.input";
import { BETA_CODE_FETCH_MANY_QUERY, BetaCodeFetchManyQueryResponse, BetaCodeFetchManyQueryVariables } from "./beta-code-fetch-many.query";

export interface UseBetaCodeFetchManyResponse {
  fetch(filter: BetaCodeFilterManyInput): Promise<BetaCodeFragment[]>;
  error?: Error;
  loading: boolean;
  data?: BetaCodeFragment[];
}

export function useBetaCodeFetchMany(): UseBetaCodeFetchManyResponse {
  const [getBetaCodes, { loading, error, data }] = useLazyQuery<BetaCodeFetchManyQueryResponse, BetaCodeFetchManyQueryVariables>(BETA_CODE_FETCH_MANY_QUERY);

  const onFetchBetaCodes = async (filter: BetaCodeFilterManyInput): Promise<BetaCodeFragment[]> => {
    const matchingBetaCodes = await getBetaCodes({ variables: { filter } })
    return matchingBetaCodes.data!.betaCodes;
  }

  return {
    fetch: onFetchBetaCodes,
    error,
    loading,
    data: data?.betaCodes,
  }
}