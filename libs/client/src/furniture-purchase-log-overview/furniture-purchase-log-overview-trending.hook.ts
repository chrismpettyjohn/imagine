import { useLazyQuery } from "@apollo/client";
import { FurniturePurchaseLogOverviewFragment } from "./furniture-purchase-log-overview.fragment";
import { FurniturePurchaseLogOverviewFilterManyInput } from "./furniture-purchase-log-overview.input";
import { FURNITURE_PURCHASE_LOG_FETCH_MANY_QUERY } from "../furniture-purchase-log/furniture-purchase-log-fetch-many.query";
import { FurniturePurchaseLogOverviewTrendingQueryResponse, FurniturePurchaseLogOverviewTrendingQueryVariables } from "./furniture-purchase-log-overview-trending.query";

export interface UseFurniturePurchaseLogOverviewTrendingResponse {
  fetch(filter: FurniturePurchaseLogOverviewFilterManyInput): Promise<FurniturePurchaseLogOverviewFragment[]>;
  error?: Error;
  loading: boolean;
  data?: FurniturePurchaseLogOverviewFragment[];
}

export function useFurniturePurchaseLogOverviewTrending(): UseFurniturePurchaseLogOverviewTrendingResponse {
  const [getFurniturePurchaseLogOverviews, { loading, error, data }] = useLazyQuery<FurniturePurchaseLogOverviewTrendingQueryResponse, FurniturePurchaseLogOverviewTrendingQueryVariables>(FURNITURE_PURCHASE_LOG_FETCH_MANY_QUERY);

  const onFetchFurniturePurchaseLogOverviews = async (filter: FurniturePurchaseLogOverviewFilterManyInput): Promise<FurniturePurchaseLogOverviewFragment[]> => {
    const matchingFurniturePurchaseLogOverviews = await getFurniturePurchaseLogOverviews({ fetchPolicy: "network-only", variables: { filter } })
    return matchingFurniturePurchaseLogOverviews.data!.furniturePurchaseLogOverviewTrending;
  }

  return {
    fetch: onFetchFurniturePurchaseLogOverviews,
    error,
    loading,
    data: data?.furniturePurchaseLogOverviewTrending,
  }
}