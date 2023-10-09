import gql from 'graphql-tag';
import { FurniturePurchaseLogOverviewFilterOneInput } from './furniture-purchase-log-overview.input';
import { FURNITURE_PURCHASE_LOG_OVERVIEW_FRAGMMENT, FurniturePurchaseLogOverviewFragment } from './furniture-purchase-log-overview.fragment';

export const FURNITURE_PURCHASE_LOG_OVERVIEW_FETCH_ONE_QUERY: any = gql`
  ${FURNITURE_PURCHASE_LOG_OVERVIEW_FRAGMMENT}
  query($filter: FurniturePurchaseLogOverviewFilterOneInput!) {
    furniturePurchaseLogOverview(filter: $filter) {
      ...FurniturePurchaseLogOverviewFragment
    }
  }
`
export interface FurniturePurchaseLogOverviewFetchOneQueryVariables {
  filter: FurniturePurchaseLogOverviewFilterOneInput;
}

export interface FurniturePurchaseLogOverviewFetchOneQueryResponse {
  furniturePurchaseLogOverview: FurniturePurchaseLogOverviewFragment;
}