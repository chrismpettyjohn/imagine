import { ArticleFragment } from '@imagine-cms/client';

export interface EditArticleModalProps {
  article: ArticleFragment;
  onUpdate(updatedArticle: ArticleFragment): void;
}
