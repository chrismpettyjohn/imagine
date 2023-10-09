import { useLazyQuery } from "@apollo/client";
import { FurniturePurchaseLogOverviewFragment } from "./furniture-purchase-log-overview.fragment";
import { FurniturePurchaseLogOverviewFilterManyInput } from "./furniture-purchase-log-overview.input";
import { FURNITURE_PURCHASE_LOG_FETCH_MANY_QUERY } from "../furniture-purchase-log/furniture-purchase-log-fetch-many.query";
import { FurniturePurchaseLogOverviewTopPointsQueryResponse, FurniturePurchaseLogOverviewTopPointsQueryVariables } from "./furniture-purchase-log-overview-top-points.query";

export interface UseFurniturePurchaseLogOverviewTopPointsResponse {
  fetch(filter: FurniturePurchaseLogOverviewFilterManyInput): Promise<FurniturePurchaseLogOverviewFragment[]>;
  error?: Error;
  loading: boolean;
  data?: FurniturePurchaseLogOverviewFragment[];
}

export function useFurniturePurchaseLogOverviewTopPoints(): UseFurniturePurchaseLogOverviewTopPointsResponse {
  const [getFurniturePurchaseLogOverviews, { loading, error, data }] = useLazyQuery<FurniturePurchaseLogOverviewTopPointsQueryResponse, FurniturePurchaseLogOverviewTopPointsQueryVariables>(FURNITURE_PURCHASE_LOG_FETCH_MANY_QUERY);

  const onFetchFurniturePurchaseLogOverviews = async (filter: FurniturePurchaseLogOverviewFilterManyInput): Promise<FurniturePurchaseLogOverviewFragment[]> => {
    const matchingFurniturePurchaseLogOverviews = await getFurniturePurchaseLogOverviews({ fetchPolicy: "network-only", variables: { filter } })
    return matchingFurniturePurchaseLogOverviews.data!.furniturePurchaseLogOverviewTopPoints;
  }

  return {
    fetch: onFetchFurniturePurchaseLogOverviews,
    error,
    loading,
    data: data?.furniturePurchaseLogOverviewTopPoints,
  }
}