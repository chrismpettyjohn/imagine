import gql from 'graphql-tag';
import { FurniturePurchaseLogOverviewFilterManyInput } from './furniture-purchase-log-overview.input';
import { FURNITURE_PURCHASE_LOG_OVERVIEW_FRAGMMENT, FurniturePurchaseLogOverviewFragment } from './furniture-purchase-log-overview.fragment';

export const FURNITURE_PURCHASE_LOG_OVERVIEW_TOP_POINTS_QUERY: any = gql`
  ${FURNITURE_PURCHASE_LOG_OVERVIEW_FRAGMMENT}
  query($filter: FurniturePurchaseLogOverviewFilterManyInput!) {
    furniturePurchaseLogsOverviewTopCostPoints(filter: $filter) {
      ...FurniturePurchaseLogOverviewFragment
    }
  }
`
export interface furniturePurchaseLogsOverviewTopCostPointsQueryVariables {
  filter: FurniturePurchaseLogOverviewFilterManyInput;
}

export interface furniturePurchaseLogsOverviewTopCostPointsQueryResponse {
  furniturePurchaseLogsOverviewTopCostPoints: FurniturePurchaseLogOverviewFragment[];
}