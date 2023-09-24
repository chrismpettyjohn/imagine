import { BugReportFragment } from "@imagine-cms/client";

export interface OpenBugReportButtonProps {
  bugReport: BugReportFragment;
  onOpen(): void;
}