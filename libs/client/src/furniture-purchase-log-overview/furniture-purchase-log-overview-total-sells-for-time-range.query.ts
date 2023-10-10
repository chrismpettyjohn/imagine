import gql from 'graphql-tag';
import { FurniturePurchaseLogOverviewAverageSellsForTimeRangeInput } from './furniture-purchase-log-overview.input';

export const FURNITURE_PURCHASE_LOG_OVERVIEW_TOTAL_SELLS_FOR_TIME_RANGE_QUERY: any = gql`
  query($filter: FurniturePurchaseLogOverviewAverageSellsForTimeRangeInput!) {
    furniturePurchaseLogOverviewTotalSellsForTimeRange(filter: $filter)
  }
`
export interface FurniturePurchaseLogOverviewTotalSellsForTimeRangeQueryVariables {
  filter: FurniturePurchaseLogOverviewAverageSellsForTimeRangeInput;
}

export interface FurniturePurchaseLogOverviewTotalSellsForTimeRangeQueryResponse {
  furniturePurchaseLogOverviewTotalSellsForTimeRange: number
};