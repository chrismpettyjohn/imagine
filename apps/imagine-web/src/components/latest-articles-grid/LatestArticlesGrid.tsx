import { Link } from 'wouter';
import React, { useEffect } from 'react';
import { useFetchLatestArticles } from '@imagine-cms/web';
import { LatestArticlesGridElement } from './LatestArticlesGrid.styled';
import { LatestArticleContainer } from '../latest-article-container/LatestArticleContainer';

export function LatestArticlesGrid() {
  const { runQuery, loading, data } = useFetchLatestArticles();
  const latestArticles = data?.articles;

  useEffect(() => {
    runQuery();
  }, [runQuery]);

  return (
    <LatestArticlesGridElement>
      {
        latestArticles?.map(_ => (
          <LatestArticleContainer article={_} key={`latest_article_${_.id}`} />
        ))
      }
    </LatestArticlesGridElement>
  )
}
