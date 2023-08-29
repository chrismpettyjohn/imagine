import {ArticleWire} from '@imagine-cms/types';

export interface CreateArticleModalProps {
  onCreate(newArticle: ArticleWire): void;
}
