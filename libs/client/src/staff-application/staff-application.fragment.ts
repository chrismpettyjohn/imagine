import gql from 'graphql-tag';
import { USER_FRAGMENT, UserFragment } from '../user/user.fragment';

export const STAFF_APPLICATION_FRAGMENT: any = gql`
  ${USER_FRAGMENT}
  fragment StaffApplicationFragment on StaffApplicationModel {
    id
    userID
    user {
      ...UserFragment
    }
    rankID
    accepted
    reviewingUserID
    reviewingUser {
      ...UserFragment
    }
    reviewedAt
    createdAt
    updatedAt
  }
`

export interface StaffApplicationFragment {
  id: number;
  userID: number;
  user: UserFragment;
  rankID: number;
  accepted: boolean;
  reviewingUserID?: number;
  reviewingUser?: UserFragment;
  reviewedAt?: number;
  createdAt: number;
  updatedAt: number;
}