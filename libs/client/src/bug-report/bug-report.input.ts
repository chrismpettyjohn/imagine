export interface BugReportFilterOneInput {
  id: number;
}

export interface BugReportFilterManyInput {
  ids?: number[];
  reportingUserIDs?: number[];
  resolvingUserIDs?: number[];
  severity?: number[];
  isOpen?: boolean;
  limit?: number;
}

export interface BugReportCreateInput {
  content: string;
}

export interface BugReportUpdateInput {
  content?: string;
  severity?: number;
}