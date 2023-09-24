import { BugReportFragment } from "@imagine-cms/client";

export interface ResolveBugReportButtonProps {
  bugReport: BugReportFragment;
  onResolved: () => void;
}