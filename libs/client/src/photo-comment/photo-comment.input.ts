export interface PhotoCommentCreateInput {
  photoID: number;
  comment: string;
}

export interface PhotoCommentUpdateInput {
  comment: string;
}

export interface PhotoCommentFilterManyInput {
  ids?: number[];
  photoIDs?: number[];
  userIDS?: number[];
}

export interface PhotoCommentFilterOneInput {
  id: number;
}

export interface PhotoCommentDeleteInput {
  id: number;
}