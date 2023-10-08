import gql from 'graphql-tag';
import { USER_FRAGMENT, UserFragment } from '../user/user.fragment';

export const BUG_REPORT_FRAGMENT: any = gql`
  ${USER_FRAGMENT}
  fragment BugReportFragment on BugReportModel {
    id
    reportingUserID
    reportingUser {
      ...UserFragment
    }
    title
    content
    url
    severity
    createdAt
    updatedAt
    resolvedAt
    resolvingUserID
    resolvingUser {
      ...UserFragment
    }
  }
`

export interface BugReportFragment {
  id: number;
  reportingUserID: number;
  reportingUser: UserFragment;
  title: string;
  content: string;
  url: string;
  severity: number;
  createdAt: number;
  updatedAt: number;
  resolvedAt?: number;
  resolvingUserID?: number;
  resolvingUser?: UserFragment;
}