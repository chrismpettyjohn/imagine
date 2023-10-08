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
  const [getFurniturePurchaseLogs, { loading, error, data }] = useLazyQuery<FurniturePurchaseLogFetchOneQueryResponse, FurniturePurchaseLogFetchOneQueryVariables>(FURNITURE_PURCHASE_LOG_FETCH_ONE_QUERY);

  const onFetchFurniturePurchaseLogs = async (filter: FurniturePurchaseLogFilterOneInput): Promise<FurniturePurchaseLogFragment> => {
    const matchingFurniturePurchaseLogs = await getFurniturePurchaseLogs({ fetchPolicy: "network-only", variables: { filter } })
    return matchingFurniturePurchaseLogs.data!.furniturePurchaseLog;
  }

  return {
    fetch: onFetchFurniturePurchaseLogs,
    error,
    loading,
    data: data?.furniturePurchaseLog,
  }
}