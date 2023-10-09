import { useLazyQuery } from "@apollo/client";
import { FurniturePurchaseLogFragment } from "./furniture-purchase-log.fragment";
import { FurniturePurchaseLogFilterManyInput } from "./furniture-purchase-log.input";
import { FURNITURE_PURCHASE_LOG_FETCH_MANY_QUERY, FurniturePurchaseLogFetchManyQueryResponse, FurniturePurchaseLogFetchManyQueryVariables } from "./furniture-purchase-log-fetch-many.query";

export interface UseFurniturePurchaseLogFetchManyResponse {
  fetch(filter: FurniturePurchaseLogFilterManyInput): Promise<FurniturePurchaseLogFragment[]>;
  error?: Error;
  loading: boolean;
  data?: FurniturePurchaseLogFragment[];
}

export function useFurniturePurchaseLogFetchMany(): UseFurniturePurchaseLogFetchManyResponse {
  const [getFurniturePurchaseLogs, { loading, error, data }] = useLazyQuery<FurniturePurchaseLogFetchManyQueryResponse, FurniturePurchaseLogFetchManyQueryVariables>(FURNITURE_PURCHASE_LOG_FETCH_MANY_QUERY);

  const onFetchFurniturePurchaseLogs = async (filter: FurniturePurchaseLogFilterManyInput): Promise<FurniturePurchaseLogFragment[]> => {
    const matchingFurniturePurchaseLogs = await getFurniturePurchaseLogs({ fetchPolicy: "network-only", variables: { filter } })
    return matchingFurniturePurchaseLogs.data!.furniturePurchaseLogs;
  }

  return {
    fetch: onFetchFurniturePurchaseLogs,
    error,
    loading,
    data: data?.furniturePurchaseLogs,
  }
}