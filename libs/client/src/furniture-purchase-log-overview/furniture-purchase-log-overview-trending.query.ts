import gql from 'graphql-tag';
import { FurniturePurchaseLogOverviewFilterManyInput } from './furniture-purchase-log-overview.input';
import { FURNITURE_PURCHASE_LOG_OVERVIEW_FRAGMMENT, FurniturePurchaseLogOverviewFragment } from './furniture-purchase-log-overview.fragment';

export const FURNITURE_PURCHASE_LOG_OVERVIEW_TRENDING_QUERY: any = gql`
  ${FURNITURE_PURCHASE_LOG_OVERVIEW_FRAGMMENT}
  query($filter: FurniturePurchaseLogOverviewFilterManyInput!) {
    furniturePurchaseLogsOverviewTrending(filter: $filter) {
      ...FurniturePurchaseLogOverviewFragment
    }
  }
`
export interface furniturePurchaseLogsOverviewTrendingQueryVariables {
  filter: FurniturePurchaseLogOverviewFilterManyInput;
}

export interface furniturePurchaseLogsOverviewTrendingQueryResponse {
  furniturePurchaseLogsOverviewTrending: FurniturePurchaseLogOverviewFragment[];
}