import React from 'react';
import { Link } from 'wouter';
import { ArticleCreateInputDTO } from '@imagine-cms/types';
import { ArticleEditorCard } from '../../components/article-editor-card/ArticleEditorCard';

export function NewsArticlesCreateArticleScreen() {

  const onCreateArticle = async (input: ArticleCreateInputDTO) => {

  }

  return (
    <>
      <h1>
        <Link to="/articles">
          <i className="fa fa-caret-left" style={{ marginRight: 8 }} />
        </Link>
        News Articles - Creating Article
      </h1>
      <ArticleEditorCard onSave={onCreateArticle} />
    </>
  )
}