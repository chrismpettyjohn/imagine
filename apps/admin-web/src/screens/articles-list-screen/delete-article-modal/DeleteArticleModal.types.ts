import {ArticleWire} from '@imagine-cms/types';

export interface DeleteArticleModalProps {
  article: ArticleWire;
  onDelete(): void;
}
