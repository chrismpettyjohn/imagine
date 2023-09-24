import { useMutation } from "@apollo/client";
import { BugReportFilterOneInput, BugReportUpdateInput } from "./bug-report.input";
import { BUG_REPORT_UPDATE_MUTATION, BugReportUpdateMutationResponse, BugReportUpdateMutationVariables } from "./bug-report-update.mutation";

export interface UseBugReportUpdateResponse {
  execute(filter: BugReportFilterOneInput, input: BugReportUpdateInput): Promise<void>;
  error?: Error;
  loading: boolean;
}

export function useBugReportUpdate(): UseBugReportUpdateResponse {
  const [updateBugReport, { loading, error, data }] = useMutation<BugReportUpdateMutationResponse, BugReportUpdateMutationVariables>(BUG_REPORT_UPDATE_MUTATION);

  const onFetchBugReport = async (filter: BugReportFilterOneInput, input: BugReportUpdateInput): Promise<void> => {
    await updateBugReport({ fetchPolicy: "network-only", variables: { filter, input } })

  }

  return {
    execute: onFetchBugReport,
    error,
    loading,
  }
}