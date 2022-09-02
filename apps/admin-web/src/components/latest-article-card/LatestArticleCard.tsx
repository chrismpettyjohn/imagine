import React, {useEffect} from 'react';
import {ArticleCard} from '../article-card/ArticleCard';
import {useFetchLatestArticle} from '../../hooks/fetch-latest-article.hook';

export function LatestArticleCard() {
  const {runQuery, loading, data} = useFetchLatestArticle();
  const latestArticle = data?.articles?.[0];

  useEffect(() => {
    runQuery();
  }, []);

  return (
    <>
      <h5 className="silver">Latest Article
        <span className="float-right">
          <i className="fas fa-newspaper" />
        </span>
      </h5>
      {
        loading && (
          <i className="fa fa-spinner fa-spin fa-2x" />
        )
      }
      {
        latestArticle && <ArticleCard article={latestArticle} />
      }
    </>
  )
}
