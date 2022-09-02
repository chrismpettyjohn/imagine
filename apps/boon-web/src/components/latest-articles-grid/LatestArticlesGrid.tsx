import gql from 'graphql-tag';
import React, {useEffect} from 'react';
import {ArticleWire} from '@imagine-cms/types';
import {useRunQuery} from '../../graphql/run-query';
import {ArticleCard} from '../article-card/ArticleCard';

const FETCH_LATEST_ARTICLES = gql`
    query {
        articles(other: { take: 6, order: { id: "DESC" } }) {
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

export function LatestArticlesGrid() {
  const {runQuery, loading, data} = useRunQuery<{articles: ArticleWire[]}>(FETCH_LATEST_ARTICLES)

  const latestArticles = data?.articles;

  useEffect(() => {
    runQuery();
  }, []);

  return (
    <>
      <h5 className="silver">
        Latest Articles
        <span className="float-right">
        <i className="fas fa-newspaper" />
      </span>
      </h5>
      <div id="articles-strip">
        <div className="row">
          {
            latestArticles?.map(article => (
              <div className="col-xl-4 col-lg-6 col-md-6 col-12" key={`latest_article_grid_${article.id}`}>
                <ArticleCard article={article} />
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}
