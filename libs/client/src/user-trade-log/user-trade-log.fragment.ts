import gql from 'graphql-tag';

export const USER_TRADE_LOG_FRAGMENT: any = gql`
  fragment UserTradeLogFragment on UserTradeLogModel {
    id
    userOneID
    userOneIPAddress
    userOneItemCount
    userTwoID
    userTwoIPAddress
    userTwoItemCount
    timestamp
  }
`

export interface UserTradeLogFragment {
  id: number;
  userOneID: number;
  userOneIPAddress: string;
  userOneItemCount: number;
  userTwoID: number;
  userTwoIPAddress: string;
  userTwoItemCount: number;
  timestamp: number;
}