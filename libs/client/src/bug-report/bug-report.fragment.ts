import gql from 'graphql-tag';

export const BUG_REPORT_FRAGMENT: any = gql`
  fragment BugReportFragment on BugReportModel {
    id
    reportingUserID
    content
    url
    severity
    createdAt
    updatedAt
    resolvedAt
    resolvingUserID
  }
`

export interface BugReportFragment {
  id: number;
  reportingUserID: number;
  content: string;
  url: string;
  severity: number;
  createdAt: number;
  updatedAt: number;
  resolvingAt?: number;
  resolvingUserID?: number;
}