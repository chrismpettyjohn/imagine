export interface GroupFilterOneInput {
  id: number;
}

export interface GroupFilterManyInput {
  ids?: number[];
  userIDs?: number[];
  skip?: number;
  limit?: number;
}