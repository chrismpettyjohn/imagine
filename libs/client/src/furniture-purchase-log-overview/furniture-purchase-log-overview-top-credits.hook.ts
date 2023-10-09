import { useLazyQuery } from "@apollo/client";
import { FurniturePurchaseLogOverviewFragment } from "./furniture-purchase-log-overview.fragment";
import { FurniturePurchaseLogOverviewFilterManyInput } from "./furniture-purchase-log-overview.input";
import { FURNITURE_PURCHASE_LOG_OVERVIEW_TOP_CREDITS_QUERY, furniturePurchaseLogsOverviewTopCreditsQueryResponse, furniturePurchaseLogsOverviewTopCreditsQueryVariables } from "./furniture-purchase-log-overview-top-credits.query";

export interface UsefurniturePurchaseLogsOverviewTopCreditsResponse {
  fetch(filter: FurniturePurchaseLogOverviewFilterManyInput): Promise<FurniturePurchaseLogOverviewFragment[]>;
  error?: Error;
  loading: boolean;
  data?: FurniturePurchaseLogOverviewFragment[];
}

export function usefurniturePurchaseLogsOverviewTopCredits(): UsefurniturePurchaseLogsOverviewTopCreditsResponse {
  const [getFurniturePurchaseLogOverviews, { loading, error, data }] = useLazyQuery<furniturePurchaseLogsOverviewTopCreditsQueryResponse, furniturePurchaseLogsOverviewTopCreditsQueryVariables>(FURNITURE_PURCHASE_LOG_OVERVIEW_TOP_CREDITS_QUERY);

  const onFetchFurniturePurchaseLogOverviews = async (filter: FurniturePurchaseLogOverviewFilterManyInput): Promise<FurniturePurchaseLogOverviewFragment[]> => {
    const matchingFurniturePurchaseLogOverviews = await getFurniturePurchaseLogOverviews({ fetchPolicy: "network-only", variables: { filter } })
    return matchingFurniturePurchaseLogOverviews.data!.furniturePurchaseLogsOverviewTopCredits;
  }

  return {
    fetch: onFetchFurniturePurchaseLogOverviews,
    error,
    loading,
    data: data?.furniturePurchaseLogsOverviewTopCredits,
  }
}