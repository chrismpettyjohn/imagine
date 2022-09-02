import gql from 'graphql-tag';
import React, {useEffect} from 'react';
import {ArticleWire} from '@imagine-cms/types';
import {useRunQuery} from '../../graphql/run-query';
import {ArticleCard} from '../article-card/ArticleCard';

const FETCH_LATEST_ARTICLE = gql`
  query {
      articles(other: { take: 1, order: { id: "DESC" } }) {
          id,
          name,
          description,
          content,
          imageURL,
          user {
              id,
              username,
              look,
          },
      }
  }
`

export function LatestArticleCard() {
  const {runQuery, loading, data} = useRunQuery<{articles: ArticleWire[]}>(FETCH_LATEST_ARTICLE)
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
