import gql from 'graphql-tag';
import { UserTradeLogFilterManyInput } from './user-trade-log.input';
import { USER_TRADE_LOG_FRAGMENT, UserTradeLogFragment } from './user-trade-log.fragment';

export const USER_TRADE_LOG_FETCH_MANY_QUERY: any = gql`
  ${USER_TRADE_LOG_FRAGMENT}
  query($filter: UserTradeLogFilterManyInput!) {
    userTradeLogs(filter: $filter) {
      ...UserTradeLogFragment
    }
  }
`

export interface UserTradeLogFetchManyQueryVariables {
  filter: UserTradeLogFilterManyInput;
}

export interface UserTradeLogFetchManyQueryResponse {
  userTradeLogs: UserTradeLogFragment[];
}
