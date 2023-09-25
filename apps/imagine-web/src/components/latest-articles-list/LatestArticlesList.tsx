import React, { useEffect } from 'react';
import { useArticleFetchMany } from '@imagine-cms/client';
import { LatestArticlesListElement } from './LatestArticlesList.styled';
import { ArticleListContainer } from '../article-list-container/ArticleListContainer';
import { LoadingMessage } from '../loading-message/LoadingMessage';

export function LatestArticlesList() {
  const fetchArticles = useArticleFetchMany();

  useEffect(() => {
    fetchArticles.fetch({});
  }, []);

  return (
    <LatestArticlesListElement>
      {
        fetchArticles.loading && (
          <LoadingMessage>
            Loading articles
          </LoadingMessage>
        )
      }
      {
        fetchArticles.data?.map(_ => (
          <ArticleListContainer article={_} key={`latest_article_${_.id}`} />
        ))
      }
    </LatestArticlesListElement>
  )
}