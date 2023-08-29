import {ArticleWire} from '@imagine-cms/types';

export interface EditArticleModalProps {
  article: ArticleWire;
  onUpdate(updatedArticle: ArticleWire): void;
}
