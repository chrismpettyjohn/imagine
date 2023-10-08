export interface PhotoFilterManyInput {
  ids?: number[];
  userIDs?: number[];
  skip?: number;
  limit?: number;
}

export interface PhotoFilterOneInput {
  id: number;
}