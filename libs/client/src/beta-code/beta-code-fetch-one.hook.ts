import { useLazyQuery } from "@apollo/client";
import { BetaCodeFragment } from "./beta-code.fragment";
import { BetaCodeFilterOneInput } from "./beta-code.input";
import { BETA_CODE_FETCH_ONE_QUERY, BetaCodeFetchOneQueryResponse, BetaCodeFetchOneQueryVariables } from "./beta-code-fetch-one.query";

export interface UseBetaCodeFetchOneResponse {
  fetch(filter: BetaCodeFilterOneInput): Promise<BetaCodeFragment>;
  error?: Error;
  loading: boolean;
  data?: BetaCodeFragment;
}

export function useBetaCodeFetchOne(): UseBetaCodeFetchOneResponse {
  const [getBetaCodes, { loading, error, data }] = useLazyQuery<BetaCodeFetchOneQueryResponse, BetaCodeFetchOneQueryVariables>(BETA_CODE_FETCH_ONE_QUERY);

  const onFetchBetaCodes = async (filter: BetaCodeFilterOneInput): Promise<BetaCodeFragment> => {
    const matchingBetaCodes = await getBetaCodes({ variables: { filter } })
    return matchingBetaCodes.data!.betaCode;
  }

  return {
    fetch: onFetchBetaCodes,
    error,
    loading,
    data: data?.betaCode,
  }
}