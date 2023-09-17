import gql from 'graphql-tag';
import { USER_FRAGMENT, UserFragment } from '../user/user.fragment';

export enum RadioRequestStatus {
  Requested = 'requested',
  Approved = 'approved',
  Rejected = 'rejected',
}

export const RADIO_REQUEST_FRAGMENT: any = gql`
  ${USER_FRAGMENT}
  fragment RadioRequestFragment on RadioRequestModel {
    id
    userID 
    user {
      ...UserFragment
    }
    reviewingUserID
    reviewingUser {
      ...UserFragment
    }
    reviewedAt
    content
    status
    createdAt
    updatedAt
  }
`

export interface RadioRequestFragment {
  id: number;
  userID: number;
  user: UserFragment;
  reviewingUserID?: number;
  reviewingUser?: UserFragment;
  reviewedAt?: number;
  content: string;
  status: RadioRequestStatus;
  createdAt: number;
  updatedAt: number;
}