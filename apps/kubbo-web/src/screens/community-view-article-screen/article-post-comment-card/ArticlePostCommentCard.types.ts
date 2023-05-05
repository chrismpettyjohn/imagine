import {ArticleCommentWire} from '@imagine-cms/types';

export interface ArticlePostCommentCardProps {
  articleID: number;
  onPost(newComment: ArticleCommentWire): void;
}
