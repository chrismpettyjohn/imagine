export interface ArticleFilterManyInput {
  ids?: number[];
  userIDs?: number[];
  skip?: number;
  limit?: number;
}

export interface ArticleFilterOneInput {
  id: number;
}