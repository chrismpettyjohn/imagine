import gql from 'graphql-tag';
import { BugReportFilterManyInput } from './bug-report.input';
import { BUG_REPORT_FRAGMENT, BugReportFragment } from './bug-report.fragment';

export const BUG_REPORT_FETCH_MANY_QUERY: any = gql`
  ${BUG_REPORT_FRAGMENT}
  query($filter: BugReportFilterManyInput!) {
    bugReports(filter: $filter) {
      ...BugReportFragment
    }
  }
`

export interface BugReportFetchManyQueryVariables {
  filter: BugReportFilterManyInput;
}

export interface BugReportFetchManyQueryResponse {
  bugReports: BugReportFragment[];
}