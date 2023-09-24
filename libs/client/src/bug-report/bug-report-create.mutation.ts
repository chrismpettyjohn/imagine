import gql from 'graphql-tag';
import { BugReportCreateInput } from './bug-report.input';
import { BUG_REPORT_FRAGMENT, BugReportFragment } from './bug-report.fragment';

export const BUG_REPORT_CREATE_MUTATION: any = gql`
  ${BUG_REPORT_FRAGMENT}
  mutation($input: BugReportCreateInput!) {
    bugReportCreate(input: $input) {
      ...BugReportFragment
    }
  }
`

export interface BugReportCreateMutationVariables {
  input: BugReportCreateInput;
}
export interface BugReportCreateMutationResponse {
  bugReportCreate: BugReportFragment;
}