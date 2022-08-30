export interface ArticleCommentCreateInputDTO {
  articleID: number;
  comment: string;
}

export interface ArticleCommentUpdateInputDTO {
  comment?: string;
}
