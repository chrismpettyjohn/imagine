import { useMutation } from "@apollo/client";
import { BugReportFilterOneInput } from "./bug-report.input";
import { BUG_REPORT_DELETE_MUTATION, BugReportDeleteMutationResponse, BugReportDeleteMutationVariables } from "./bug-report-delete.mutation";

export interface UseBugReportDeleteResponse {
  execute(filter: BugReportFilterOneInput): Promise<void>;
  error?: Error;
  loading: boolean;
}

export function useBugReportDelete(): UseBugReportDeleteResponse {
  const [deleteBugReport, { loading, error }] = useMutation<BugReportDeleteMutationResponse, BugReportDeleteMutationVariables>(BUG_REPORT_DELETE_MUTATION);

  const onFetchBugReport = async (filter: BugReportFilterOneInput): Promise<void> => {
    await deleteBugReport({ variables: { filter } })
  }

  return {
    execute: onFetchBugReport,
    error,
    loading,
  }
}