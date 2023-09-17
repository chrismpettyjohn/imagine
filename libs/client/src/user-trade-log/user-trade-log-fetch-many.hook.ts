import { useLazyQuery } from "@apollo/client";
import { UserTradeLogFragment } from "./user-trade-log.fragment";
import { UserTradeLogFilterManyInput } from "./user-trade-log.input";
import { USER_TRADE_LOG_FETCH_MANY_QUERY, UserTradeLogFetchManyQueryResponse, UserTradeLogFetchManyQueryVariables } from "./user-trade-log-fetch-many.query";

export interface UseUserTradeLogFetchManyResponse {
  fetch(filter: UserTradeLogFilterManyInput): Promise<UserTradeLogFragment[]>;
  error?: Error;
  loading: boolean;
  data?: UserTradeLogFragment[];
}

export function useUserTradeLogFetchMany(): UseUserTradeLogFetchManyResponse {
  const [getUserTradeLogs, { loading, error, data }] = useLazyQuery<UserTradeLogFetchManyQueryResponse, UserTradeLogFetchManyQueryVariables>(USER_TRADE_LOG_FETCH_MANY_QUERY);

  const onFetchUserTradeLogs = async (filter: UserTradeLogFilterManyInput): Promise<UserTradeLogFragment[]> => {
    const matchingUserTradeLogs = await getUserTradeLogs({ variables: { filter } })
    return matchingUserTradeLogs.data!.userTradeLogs;
  }

  return {
    fetch: onFetchUserTradeLogs,
    error,
    loading,
    data: data?.userTradeLogs,
  }
}