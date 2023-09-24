import { useLazyQuery } from "@apollo/client";
import { UserTradeLogFragment } from "./user-trade-log.fragment";
import { UserTradeLogFilterOneInput } from "./user-trade-log.input";
import { USER_TRADE_LOG_FETCH_ONE_QUERY, UserTradeLogFetchOneQueryResponse, UserTradeLogFetchOneQueryVariables } from "./user-trade-log-fetch-one.query";

export interface UseUserTradeLogFetchOneResponse {
  fetch(filter: UserTradeLogFilterOneInput): Promise<UserTradeLogFragment>;
  error?: Error;
  loading: boolean;
  data?: UserTradeLogFragment;
}

export function useUserTradeLogFetchOne(): UseUserTradeLogFetchOneResponse {
  const [getUserTradeLogs, { loading, error, data }] = useLazyQuery<UserTradeLogFetchOneQueryResponse, UserTradeLogFetchOneQueryVariables>(USER_TRADE_LOG_FETCH_ONE_QUERY);

  const onFetchUserTradeLogs = async (filter: UserTradeLogFilterOneInput): Promise<UserTradeLogFragment> => {
    const matchingUserTradeLogs = await getUserTradeLogs({ fetchPolicy: "network-only", variables: { filter } })
    return matchingUserTradeLogs.data!.userTradeLog;
  }

  return {
    fetch: onFetchUserTradeLogs,
    error,
    loading,
    data: data?.userTradeLog,
  }
}