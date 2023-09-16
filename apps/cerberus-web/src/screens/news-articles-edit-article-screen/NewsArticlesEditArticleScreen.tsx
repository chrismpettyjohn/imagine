import { useRoute } from 'wouter';
import React, { useEffect } from 'react';
import { ArticleCreateInputDTO } from '@imagine-cms/types';
import { useArticleFetchOne } from '@imagine-cms/client';
import { ArticleEditorCard } from '../../components/article-editor-card/ArticleEditorCard';

export function NewsArticlesEditArticleScreen() {
  const [, params] = useRoute<{ articleID: string }>('/articles/:articleID');
  const articleID = Number(params!.articleID);
  const fetchArticle = useArticleFetchOne();

  useEffect(() => {
    fetchArticle.fetch({ id: articleID });
  }, [articleID]);

  const onSaveArticle = (articleDTO: ArticleCreateInputDTO) => {

  }

  return (
    <>
      <h1>News Articles - Editing {articleID}</h1>
      {
        fetchArticle.loading && (
          <>
            <i className="fa fa-spinner fa-spin" />&nbsp;
            Loading article {articleID}...
          </>
        )
      }
      {
        fetchArticle.data && (
          <>
            <ArticleEditorCard defaultArticle={fetchArticle.data} onSave={onSaveArticle} />
          </>
        )
      }
      {fetchArticle?.data?.name}
    </>
  )
}