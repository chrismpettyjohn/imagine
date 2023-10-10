import { useLazyQuery } from "@apollo/client";
import { FurniturePurchaseLogOverviewAverageSellsForTimeRangeInput } from "./furniture-purchase-log-overview.input";
import { FURNITURE_PURCHASE_LOG_OVERVIEW_TOTAL_SELLS_FOR_TIME_RANGE_QUERY, FurniturePurchaseLogOverviewTotalSellsForTimeRangeQueryResponse, FurniturePurchaseLogOverviewTotalSellsForTimeRangeQueryVariables } from "./furniture-purchase-log-overview-total-sells-for-time-range.query";

export interface UsefurniturePurchaseLogsOverviewTotalSellsForTimeRangeResponse {
  fetch(filter: FurniturePurchaseLogOverviewAverageSellsForTimeRangeInput): Promise<number>;
  error?: Error;
  loading: boolean;
  data?: number;
}

export function usefurniturePurchaseLogsOverviewTotalSellsForTimeRange(): UsefurniturePurchaseLogsOverviewTotalSellsForTimeRangeResponse {
  const [getFurniturePurchaseLogOverviews, { loading, error, data }] = useLazyQuery<FurniturePurchaseLogOverviewTotalSellsForTimeRangeQueryResponse, FurniturePurchaseLogOverviewTotalSellsForTimeRangeQueryVariables>(FURNITURE_PURCHASE_LOG_OVERVIEW_TOTAL_SELLS_FOR_TIME_RANGE_QUERY);

  const onFetchFurniturePurchaseLogOverviews = async (filter: FurniturePurchaseLogOverviewAverageSellsForTimeRangeInput): Promise<number> => {
    const matchingFurniturePurchaseLogOverviews = await getFurniturePurchaseLogOverviews({ fetchPolicy: "network-only", variables: { filter } })
    console.log(matchingFurniturePurchaseLogOverviews)
    return matchingFurniturePurchaseLogOverviews.data!.furniturePurchaseLogOverviewTotalSellsForTimeRange;
  }

  return {
    fetch: onFetchFurniturePurchaseLogOverviews,
    error,
    loading,
    data: data?.furniturePurchaseLogOverviewTotalSellsForTimeRange,
  }
}