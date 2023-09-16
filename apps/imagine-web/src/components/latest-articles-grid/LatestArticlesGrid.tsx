import React, { useEffect } from 'react';
import { useArticleFetchMany } from '@imagine-cms/client';
import { LatestArticlesGridElement } from './LatestArticlesGrid.styled';
import { LatestArticleContainer } from '../latest-article-grid-container/LatestArticleGridContainer';

export function LatestArticlesGrid() {
  const fetchArticles = useArticleFetchMany();

  useEffect(() => {
    fetchArticles.fetch({ limit: 6 });
  }, []);

  return (
    <>
      <h1>News Articles</h1>
      <LatestArticlesGridElement>
        {
          fetchArticles.data?.map(_ => (
            <LatestArticleContainer article={_} key={`latest_article_${_.id}`} />
          ))
        }
      </LatestArticlesGridElement>
    </>
  )
}
