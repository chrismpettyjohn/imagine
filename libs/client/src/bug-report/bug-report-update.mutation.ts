import gql from 'graphql-tag';
import { BugReportFilterOneInput, BugReportUpdateInput } from './bug-report.input';

export const BUG_REPORT_UPDATE_MUTATION: any = gql`
  mutation($filter: BugReportFilterOneInput!, $input: BugReportUpdateInput!) {
    bugReportUpdate(filter: $filter, input: $input) {
      success
    }
  }
`

export interface BugReportUpdateMutationVariables {
  filter: BugReportFilterOneInput;
  input: BugReportUpdateInput
}

export interface BugReportUpdateMutationResponse {
  success: boolean;
}
