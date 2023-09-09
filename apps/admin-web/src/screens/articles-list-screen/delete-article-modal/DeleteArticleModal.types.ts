import { ArticleFragment } from '@imagine-cms/client';

export interface DeleteArticleModalProps {
  article: ArticleFragment;
  onDelete(): void;
}
