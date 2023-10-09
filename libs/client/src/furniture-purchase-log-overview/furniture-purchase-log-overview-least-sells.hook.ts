import { useLazyQuery } from "@apollo/client";
import { FurniturePurchaseLogOverviewFragment } from "./furniture-purchase-log-overview.fragment";
import { FurniturePurchaseLogOverviewFilterManyInput } from "./furniture-purchase-log-overview.input";
import { FURNITURE_PURCHASE_LOG_OVERVIEW_LEAST_SELLS_QUERY, FurniturePurchaseLogOverviewLeastSellsQueryResponse, FurniturePurchaseLogOverviewLeastSellsQueryVariables } from "./furniture-purchase-log-overview-least-sells.query";

export interface UseFurniturePurchaseLogOverviewLeastSellsResponse {
  fetch(filter: FurniturePurchaseLogOverviewFilterManyInput): Promise<FurniturePurchaseLogOverviewFragment[]>;
  error?: Error;
  loading: boolean;
  data?: FurniturePurchaseLogOverviewFragment[];
}

export function useFurniturePurchaseLogOverviewLeastSells(): UseFurniturePurchaseLogOverviewLeastSellsResponse {
  const [getFurniturePurchaseLogOverviews, { loading, error, data }] = useLazyQuery<FurniturePurchaseLogOverviewLeastSellsQueryResponse, FurniturePurchaseLogOverviewLeastSellsQueryVariables>(FURNITURE_PURCHASE_LOG_OVERVIEW_LEAST_SELLS_QUERY);

  const onFetchFurniturePurchaseLogOverviews = async (filter: FurniturePurchaseLogOverviewFilterManyInput): Promise<FurniturePurchaseLogOverviewFragment[]> => {
    const matchingFurniturePurchaseLogOverviews = await getFurniturePurchaseLogOverviews({ fetchPolicy: "network-only", variables: { filter } })
    return matchingFurniturePurchaseLogOverviews.data!.furniturePurchaseLogOverviewLeastSells;
  }

  return {
    fetch: onFetchFurniturePurchaseLogOverviews,
    error,
    loading,
    data: data?.furniturePurchaseLogOverviewLeastSells,
  }
}