import gql from 'graphql-tag';
import { BugReportFilterOneInput } from './bug-report.input';

export const BETA_CODE_OPEN_MUTATION: any = gql`
  mutation($filter: BugReportFilterOneInput!) {
    bugReportOpen(filter: $filter)
  }
`

export interface BugReportOpenMutationVariables {
  filter: BugReportFilterOneInput;
}
export interface BugReportOpenMutationResponse {
  bugReportOpen: boolean;
}