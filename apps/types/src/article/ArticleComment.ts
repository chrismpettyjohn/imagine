export interface ArticleCommentWire {
  id: number;
  articleID?: number;
  userID?: number;
  comment?: string;
  createdAt?: string;
  updatedAt?: string;
}
