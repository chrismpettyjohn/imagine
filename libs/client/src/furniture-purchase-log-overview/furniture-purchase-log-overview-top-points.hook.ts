import { useLazyQuery } from "@apollo/client";
import { FurniturePurchaseLogOverviewFragment } from "./furniture-purchase-log-overview.fragment";
import { FurniturePurchaseLogOverviewFilterManyInput } from "./furniture-purchase-log-overview.input";
import { FURNITURE_PURCHASE_LOG_OVERVIEW_TOP_POINTS_QUERY, furniturePurchaseLogsOverviewTopCostPointsQueryResponse, furniturePurchaseLogsOverviewTopCostPointsQueryVariables } from "./furniture-purchase-log-overview-top-points.query";

export interface UsefurniturePurchaseLogsOverviewTopCostPointsResponse {
  fetch(filter: FurniturePurchaseLogOverviewFilterManyInput): Promise<FurniturePurchaseLogOverviewFragment[]>;
  error?: Error;
  loading: boolean;
  data?: FurniturePurchaseLogOverviewFragment[];
}

export function usefurniturePurchaseLogsOverviewTopCostPoints(): UsefurniturePurchaseLogsOverviewTopCostPointsResponse {
  const [getFurniturePurchaseLogOverviews, { loading, error, data }] = useLazyQuery<furniturePurchaseLogsOverviewTopCostPointsQueryResponse, furniturePurchaseLogsOverviewTopCostPointsQueryVariables>(FURNITURE_PURCHASE_LOG_OVERVIEW_TOP_POINTS_QUERY);

  const onFetchFurniturePurchaseLogOverviews = async (filter: FurniturePurchaseLogOverviewFilterManyInput): Promise<FurniturePurchaseLogOverviewFragment[]> => {
    const matchingFurniturePurchaseLogOverviews = await getFurniturePurchaseLogOverviews({ fetchPolicy: "network-only", variables: { filter } })
    return matchingFurniturePurchaseLogOverviews.data!.furniturePurchaseLogsOverviewTopCostPoints;
  }

  return {
    fetch: onFetchFurniturePurchaseLogOverviews,
    error,
    loading,
    data: data?.furniturePurchaseLogsOverviewTopCostPoints,
  }
}