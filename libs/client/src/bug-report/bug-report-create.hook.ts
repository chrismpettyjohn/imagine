import { useMutation } from "@apollo/client";
import { BugReportFragment } from "./bug-report.fragment";
import { BugReportCreateInput } from "./bug-report.input";
import { BUG_REPORT_CREATE_MUTATION, BugReportCreateMutationResponse, BugReportCreateMutationVariables } from "./bug-report-create.mutation";

export interface UseBugReportCreateResponse {
  execute(input: BugReportCreateInput): Promise<BugReportFragment>;
  error?: Error;
  loading: boolean;
  data?: BugReportFragment;
}

export function useBugReportCreate(): UseBugReportCreateResponse {
  const [getBugReport, { loading, error, data }] = useMutation<BugReportCreateMutationResponse, BugReportCreateMutationVariables>(BUG_REPORT_CREATE_MUTATION);

  const onFetchBugReport = async (input: BugReportCreateInput): Promise<BugReportFragment> => {
    const matchingBugReport = await getBugReport({ variables: { input } })
    return matchingBugReport.data!.bugReportCreate;
  }

  return {
    execute: onFetchBugReport,
    error,
    loading,
    data: data?.bugReportCreate,
  }
}