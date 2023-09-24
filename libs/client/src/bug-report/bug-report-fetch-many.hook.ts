import { useLazyQuery } from "@apollo/client";
import { BugReportFragment } from "./bug-report.fragment";
import { BugReportFilterManyInput } from "./bug-report.input";
import { BUG_REPORT_FETCH_MANY_QUERY, BugReportFetchManyQueryResponse, BugReportFetchManyQueryVariables } from "./bug-report-fetch-many.query";

export interface UseBugReportFetchManyResponse {
  fetch(filter: BugReportFilterManyInput): Promise<BugReportFragment[]>;
  error?: Error;
  loading: boolean;
  data?: BugReportFragment[];
}

export function useBugReportFetchMany(): UseBugReportFetchManyResponse {
  const [getBugReports, { loading, error, data }] = useLazyQuery<BugReportFetchManyQueryResponse, BugReportFetchManyQueryVariables>(BUG_REPORT_FETCH_MANY_QUERY);

  const onFetchBugReports = async (filter: BugReportFilterManyInput): Promise<BugReportFragment[]> => {
    const matchingBugReports = await getBugReports({ fetchPolicy: "network-only", variables: { fetchPolicy: "network-only", filter } })
    return matchingBugReports.data!.bugReports;
  }

  return {
    fetch: onFetchBugReports,
    error,
    loading,
    data: data?.bugReports,
  }
}