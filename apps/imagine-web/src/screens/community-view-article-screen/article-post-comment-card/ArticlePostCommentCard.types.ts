import { ArticleCommentFragment } from '@imagine-cms/client';

export interface ArticlePostCommentCardProps {
  articleID: number;
  onPost(newComment: ArticleCommentFragment): void;
}
