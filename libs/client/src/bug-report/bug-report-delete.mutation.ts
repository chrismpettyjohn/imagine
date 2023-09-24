import gql from 'graphql-tag';
import { BugReportFilterOneInput } from './bug-report.input';

export const BUG_REPORT_DELETE_MUTATION: any = gql`
  mutation($filter: BugReportFilterOneInput!) {
    bugReportDelete(filter: $filter) {
      success
    }
  }
`

export interface BugReportDeleteMutationVariables {
  filter: BugReportFilterOneInput;
}

export interface BugReportDeleteMutationResponse {
  success: boolean;
}