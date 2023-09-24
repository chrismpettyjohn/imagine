import gql from 'graphql-tag';
import { BugReportFilterOneInput } from './bug-report.input';

export const BUG_REPORT_RESOLVE_MUTATION: any = gql`
  mutation($filter: BugReportFilterOneInput!) {
    bugReportResolve(filter: $filter)
  }
`

export interface BugReportResolveMutationVariables {
  filter: BugReportFilterOneInput;
}

export interface BugReportResolveMutationResponse {
  bugReportResolve: boolean;
}