export interface StaffApplicationCreateInput {
  rankID: number;
  content: string;
}

export interface StaffApplicationUpdateInput {
  content: string;
}

export interface StaffApplicationFilterOneInput {
  id: number;
}

export interface StaffApplicationFilterManyInput {
  ids?: number[];
  userIDs?: number[];
  rankIDs?: number[];
  limit?: number;
}