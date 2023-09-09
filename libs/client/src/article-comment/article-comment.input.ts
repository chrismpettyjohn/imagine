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
  userIDs?: number[];
}

export interface ArticleCommentFilterOneInput {
  id: number;
}

export interface ArticleCommentDeleteInput {
  id: number;
}