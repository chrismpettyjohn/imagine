import { useLazyQuery } from "@apollo/client";
import { FurniturePurchaseLogOverviewFragment } from "./furniture-purchase-log-overview.fragment";
import { FurniturePurchaseLogOverviewFilterManyInput } from "./furniture-purchase-log-overview.input";
import { FURNITURE_PURCHASE_LOG_OVERVIEW_TOP_SELLS_QUERY, furniturePurchaseLogsOverviewTopSellsQueryResponse, furniturePurchaseLogsOverviewTopSellsQueryVariables } from "./furniture-purchase-log-overview-top-sells.query";

export interface UsefurniturePurchaseLogsOverviewTopSellsResponse {
  fetch(filter: FurniturePurchaseLogOverviewFilterManyInput): Promise<FurniturePurchaseLogOverviewFragment[]>;
  error?: Error;
  loading: boolean;
  data?: FurniturePurchaseLogOverviewFragment[];
}

export function usefurniturePurchaseLogsOverviewTopSells(): UsefurniturePurchaseLogsOverviewTopSellsResponse {
  const [getFurniturePurchaseLogOverviews, { loading, error, data }] = useLazyQuery<furniturePurchaseLogsOverviewTopSellsQueryResponse, furniturePurchaseLogsOverviewTopSellsQueryVariables>(FURNITURE_PURCHASE_LOG_OVERVIEW_TOP_SELLS_QUERY);

  const onFetchFurniturePurchaseLogOverviews = async (filter: FurniturePurchaseLogOverviewFilterManyInput): Promise<FurniturePurchaseLogOverviewFragment[]> => {
    const matchingFurniturePurchaseLogOverviews = await getFurniturePurchaseLogOverviews({ fetchPolicy: "network-only", variables: { filter } })
    return matchingFurniturePurchaseLogOverviews.data!.furniturePurchaseLogsOverviewTopSells;
  }

  return {
    fetch: onFetchFurniturePurchaseLogOverviews,
    error,
    loading,
    data: data?.furniturePurchaseLogsOverviewTopSells,
  }
}