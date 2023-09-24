import { BugReportFragment } from "@imagine-cms/client";

export interface CreateBugReportCardProps {
  onCreate(newBugReport: BugReportFragment): void;
}