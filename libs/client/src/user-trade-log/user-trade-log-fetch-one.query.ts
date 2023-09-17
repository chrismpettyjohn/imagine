import gql from 'graphql-tag';
import { UserTradeLogFilterOneInput } from './user-trade-log.input';
import { USER_TRADE_LOG_FRAGMENT, UserTradeLogFragment } from './user-trade-log.fragment';

export const USER_TRADE_LOG_FETCH_ONE_QUERY: any = gql`
  ${USER_TRADE_LOG_FRAGMENT}
  query($filter: UserTradeLogFilterOneInput!) {
    userTradeLog(filter: $filter) {
      ...UserTradeLogFragment
    }
  }
`

export interface UserTradeLogFetchOneQueryVariables {
  filter: UserTradeLogFilterOneInput;
}

export interface UserTradeLogFetchOneQueryResponse {
  userTradeLog: UserTradeLogFragment;
}