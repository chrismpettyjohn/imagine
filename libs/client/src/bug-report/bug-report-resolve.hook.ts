import { useMutation } from "@apollo/client";
import { BugReportFilterOneInput } from "./bug-report.input";
import { BUG_REPORT_RESOLVE_MUTATION, BugReportResolveMutationResponse, BugReportResolveMutationVariables } from "./bug-report-resolve.mutation";

export interface UseBugReportResolveResponse {
  execute(filter: BugReportFilterOneInput): Promise<boolean>;
  error?: Error;
  loading: boolean;
  data?: boolean;
}

export function useBugReportResolve(): UseBugReportResolveResponse {
  const [getBugReport, { loading, error, data }] = useMutation<BugReportResolveMutationResponse, BugReportResolveMutationVariables>(BUG_REPORT_RESOLVE_MUTATION);

  const onFetchBugReport = async (filter: BugReportFilterOneInput): Promise<boolean> => {
    const matchingBugReport = await getBugReport({ fetchPolicy: "network-only", variables: { filter } })
    return matchingBugReport.data!.bugReportResolve;
  }

  return {
    execute: onFetchBugReport,
    error,
    loading,
    data: data?.bugReportResolve ?? undefined,
  }
}