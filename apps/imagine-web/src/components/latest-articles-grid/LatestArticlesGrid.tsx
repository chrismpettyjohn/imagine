import React, { useEffect } from 'react';
import { useFetchLatestArticles } from '@imagine-cms/web';
import { LatestArticlesGridElement } from './LatestArticlesGrid.styled';
import { LatestArticleContainer } from '../latest-article-grid-container/LatestArticleGridContainer';

export function LatestArticlesGrid() {
  const { runQuery, loading, data } = useFetchLatestArticles();
  const latestArticles = data?.articles;

  useEffect(() => {
    runQuery();
  }, [runQuery]);

  return (
    <>
      <h1>News Articles</h1>
      <LatestArticlesGridElement>
        {
          latestArticles?.map(_ => (
            <LatestArticleContainer article={_} key={`latest_article_${_.id}`} />
          ))
        }
      </LatestArticlesGridElement>
    </>
  )
}
