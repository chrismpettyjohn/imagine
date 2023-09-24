import { useMutation } from "@apollo/client";
import { BugReportFilterOneInput } from "./bug-report.input";
import { BETA_CODE_OPEN_MUTATION, BugReportOpenMutationResponse, BugReportOpenMutationVariables } from "./bug-report-open.mutation";

export interface UseBugReportOpenResponse {
  execute(filter: BugReportFilterOneInput): Promise<boolean>;
  error?: Error;
  loading: boolean;
  data?: boolean;
}

export function useBugReportOpen(): UseBugReportOpenResponse {
  const [onOpenBugReport, { loading, error, data }] = useMutation<BugReportOpenMutationResponse, BugReportOpenMutationVariables>(BETA_CODE_OPEN_MUTATION);

  const onFetchBugReport = async (filter: BugReportFilterOneInput): Promise<boolean> => {
    const matchingBugReport = await onOpenBugReport({ fetchPolicy: "network-only", variables: { filter } });
    return matchingBugReport.data!.bugReportOpen;
  }

  return {
    execute: onFetchBugReport,
    error,
    loading,
    data: data?.bugReportOpen,
  }
}