import { useLazyQuery } from "@apollo/client";
import { BugReportFragment } from "./bug-report.fragment";
import { BugReportFilterOneInput } from "./bug-report.input";
import { BUG_REPORT_FETCH_ONE_QUERY, BugReportFetchOneQueryResponse, BugReportFetchOneQueryVariables } from "./bug-report-fetch-one.query";

export interface UseBugReportFetchOneResponse {
  fetch(filter: BugReportFilterOneInput): Promise<BugReportFragment>;
  error?: Error;
  loading: boolean;
  data?: BugReportFragment;
}

export function useBugReportFetchOne(): UseBugReportFetchOneResponse {
  const [getBugReport, { loading, error, data }] = useLazyQuery<BugReportFetchOneQueryResponse, BugReportFetchOneQueryVariables>(BUG_REPORT_FETCH_ONE_QUERY);

  const onFetchBugReport = async (filter: BugReportFilterOneInput): Promise<BugReportFragment> => {
    const matchingBugReport = await getBugReport({ fetchPolicy: "network-only", variables: { filter } })
    return matchingBugReport.data!.bugReport;
  }

  return {
    fetch: onFetchBugReport,
    error,
    loading,
    data: data?.bugReport,
  }
}