export interface ArticleCommentCreateInput {
  articleID: number;
  comment: string;
}

export interface ArticleCommentUpdateInput {
  comment: string;
}

export interface ArticleCommentFilterManyInput {
  ids?: number[];
  articleIDs?: number[];
  userIDS?: number[];
}

export interface ArticleCommentFilterOneInput {
  id: number;
}

export interface ArticleCommentDeleteInput {
  id: number;
}