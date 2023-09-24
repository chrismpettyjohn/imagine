import gql from 'graphql-tag';
import { BugReportFilterOneInput } from './bug-report.input';
import { BUG_REPORT_FRAGMENT, BugReportFragment } from './bug-report.fragment';

export const BUG_REPORT_FETCH_ONE_QUERY: any = gql`
  ${BUG_REPORT_FRAGMENT}
  query($filter: BugReportFilterOneInput!) {
    bugReport(filter: $filter) {
      ...BugReportFragment
    }
  }
`

export interface BugReportFetchOneQueryVariables {
  filter: BugReportFilterOneInput;
}
export interface BugReportFetchOneQueryResponse {
  bugReport: BugReportFragment;
}