import React, { useEffect } from 'react';
import { useArticleFetchMany } from '@imagine-cms/client';
import { LatestArticlesListElement } from './LatestArticlesList.styled';
import { ArticleListContainer } from '../article-list-container/ArticleListContainer';

export function LatestArticlesList() {
  const fetchArticles = useArticleFetchMany();

  useEffect(() => {
    fetchArticles.fetch({});
  }, []);

  return (
    <LatestArticlesListElement>
      {
        fetchArticles.data?.map(_ => (
          <ArticleListContainer article={_} key={`latest_article_${_.id}`} />
        ))
      }
    </LatestArticlesListElement>
  )
}