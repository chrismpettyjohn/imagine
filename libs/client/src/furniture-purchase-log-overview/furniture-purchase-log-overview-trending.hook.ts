import { useLazyQuery } from "@apollo/client";
import { FurniturePurchaseLogOverviewFragment } from "./furniture-purchase-log-overview.fragment";
import { FurniturePurchaseLogOverviewFilterManyInput } from "./furniture-purchase-log-overview.input";
import { FURNITURE_PURCHASE_LOG_OVERVIEW_TRENDING_QUERY, furniturePurchaseLogsOverviewTrendingQueryResponse, furniturePurchaseLogsOverviewTrendingQueryVariables } from "./furniture-purchase-log-overview-trending.query";

export interface UsefurniturePurchaseLogsOverviewTrendingResponse {
  fetch(filter: FurniturePurchaseLogOverviewFilterManyInput): Promise<FurniturePurchaseLogOverviewFragment[]>;
  error?: Error;
  loading: boolean;
  data?: FurniturePurchaseLogOverviewFragment[];
}

export function usefurniturePurchaseLogsOverviewTrending(): UsefurniturePurchaseLogsOverviewTrendingResponse {
  const [getFurniturePurchaseLogOverviews, { loading, error, data }] = useLazyQuery<furniturePurchaseLogsOverviewTrendingQueryResponse, furniturePurchaseLogsOverviewTrendingQueryVariables>(FURNITURE_PURCHASE_LOG_OVERVIEW_TRENDING_QUERY);

  const onFetchFurniturePurchaseLogOverviews = async (filter: FurniturePurchaseLogOverviewFilterManyInput): Promise<FurniturePurchaseLogOverviewFragment[]> => {
    const matchingFurniturePurchaseLogOverviews = await getFurniturePurchaseLogOverviews({ fetchPolicy: "network-only", variables: { filter } })
    return matchingFurniturePurchaseLogOverviews.data!.furniturePurchaseLogsOverviewTrending;
  }

  return {
    fetch: onFetchFurniturePurchaseLogOverviews,
    error,
    loading,
    data: data?.furniturePurchaseLogsOverviewTrending,
  }
}