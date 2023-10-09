import { useLazyQuery } from "@apollo/client";
import { FurniturePurchaseLogFragment } from "./furniture-purchase-log.fragment";
import { FurniturePurchaseLogFilterOneInput } from "./furniture-purchase-log.input";
import { FURNITURE_PURCHASE_LOG_FETCH_ONE_QUERY, FurniturePurchaseLogFetchOneQueryResponse, FurniturePurchaseLogFetchOneQueryVariables } from "./furniture-purchase-log-fetch-one.query";

export interface UseFurniturePurchaseLogFetchOneResponse {
  fetch(filter: FurniturePurchaseLogFilterOneInput): Promise<FurniturePurchaseLogFragment>;
  error?: Error;
  loading: boolean;
  data?: FurniturePurchaseLogFragment;
}

export function useFurniturePurchaseLogFetchOne(): UseFurniturePurchaseLogFetchOneResponse {
  const [getfurniturePurchaseLog, { loading, error, data }] = useLazyQuery<FurniturePurchaseLogFetchOneQueryResponse, FurniturePurchaseLogFetchOneQueryVariables>(FURNITURE_PURCHASE_LOG_FETCH_ONE_QUERY);

  const onFetchfurniturePurchaseLog = async (filter: FurniturePurchaseLogFilterOneInput): Promise<FurniturePurchaseLogFragment> => {
    const matchingfurniturePurchaseLog = await getfurniturePurchaseLog({ fetchPolicy: "network-only", variables: { filter } })
    return matchingfurniturePurchaseLog.data!.furniturePurchaseLog;
  }

  return {
    fetch: onFetchfurniturePurchaseLog,
    error,
    loading,
    data: data?.furniturePurchaseLog,
  }
}