import gql from 'graphql-tag';

export const STAFF_APPLICATION_FRAGMENT: any = gql`
  fragment StaffApplicationFragment on StaffApplicationModel {
    id
    userID
    rankID
    accepted
    reviewingUserID
    reviewedAt
    createdAt
    updatedAt
  }
`

export interface StaffApplicationFragment {
  id: number;
  userID: number;
  rankID: number;
  accepted: boolean;
  reviewingUserID?: number;
  reviewedAt?: number;
  createdAt: number;
  updatedAt: number;
}