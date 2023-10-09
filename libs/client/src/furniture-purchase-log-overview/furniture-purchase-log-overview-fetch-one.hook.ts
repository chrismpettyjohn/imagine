import { useLazyQuery } from "@apollo/client";
import { FurniturePurchaseLogOverviewFragment } from "./furniture-purchase-log-overview.fragment";
import { FurniturePurchaseLogOverviewFilterOneInput } from "./furniture-purchase-log-overview.input";
import { FURNITURE_PURCHASE_LOG_OVERVIEW_FETCH_ONE_QUERY, FurniturePurchaseLogOverviewFetchOneQueryResponse, FurniturePurchaseLogOverviewFetchOneQueryVariables } from "./furniture-purchase-log-overview-fetch-one.query";

export interface UseFurniturePurchaseLogOverviewFetchOneResponse {
  fetch(filter: FurniturePurchaseLogOverviewFilterOneInput): Promise<FurniturePurchaseLogOverviewFragment>;
  error?: Error;
  loading: boolean;
  data?: FurniturePurchaseLogOverviewFragment;
}

export function useFurniturePurchaseLogOverviewFetchOne(): UseFurniturePurchaseLogOverviewFetchOneResponse {
  const [getFurniturePurchaseLogOverviews, { loading, error, data }] = useLazyQuery<FurniturePurchaseLogOverviewFetchOneQueryResponse, FurniturePurchaseLogOverviewFetchOneQueryVariables>(FURNITURE_PURCHASE_LOG_OVERVIEW_FETCH_ONE_QUERY);

  const onFetchFurniturePurchaseLogOverviews = async (filter: FurniturePurchaseLogOverviewFilterOneInput): Promise<FurniturePurchaseLogOverviewFragment> => {
    const matchingFurniturePurchaseLogOverviews = await getFurniturePurchaseLogOverviews({ fetchPolicy: "network-only", variables: { filter } })
    return matchingFurniturePurchaseLogOverviews.data!.furniturePurchaseLogOverview;
  }

  return {
    fetch: onFetchFurniturePurchaseLogOverviews,
    error,
    loading,
    data: data?.furniturePurchaseLogOverview,
  }
}