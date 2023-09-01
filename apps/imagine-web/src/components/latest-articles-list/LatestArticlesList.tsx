import React, { useEffect } from 'react';
import { useFetchLatestArticles } from '@imagine-cms/web';
import { LatestArticlesListElement } from './LatestArticlesList.styled';
import { ArticleListContainer } from '../article-list-container/ArticleListContainer';

export function LatestArticlesList() {
  const { runQuery, loading, data } = useFetchLatestArticles();
  const latestArticles = data?.articles;

  useEffect(() => {
    runQuery();
  }, [runQuery]);

  return (
    <LatestArticlesListElement>
      {
        latestArticles?.map(_ => (
          <ArticleListContainer article={_} key={`latest_article_${_.id}`} />
        ))
      }
    </LatestArticlesListElement>
  )
}