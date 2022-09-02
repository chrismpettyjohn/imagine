import {Link} from 'wouter';
import gql from 'graphql-tag';
import React, {useEffect} from 'react';
import {Carousel} from 'react-bootstrap';
import {ArticleWire} from '@imagine-cms/types';
import {useRunQuery} from '../../graphql/run-query';

const FETCH_LATEST_ARTICLES = gql`
    query {
        articles(other: { take: 5, order: { id: "DESC" } }) {
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

export function LatestArticlesSlider() {
  const {runQuery, loading, data} = useRunQuery<{articles: ArticleWire[]}>(FETCH_LATEST_ARTICLES)

  const latestArticles = data?.articles;

  useEffect(() => {
    runQuery();
  }, []);

  console.log(data);

  return (
    <Carousel>
      {
        latestArticles?.map(article => (
          <Carousel.Item key={`latest_article_${article.id}`}>
            <Link to={`/community/news/${article.id}`}>
              <img
                className="d-block w-100"
                src={article.imageURL}
                alt={article.description}
              />
              <Carousel.Caption>
                <h3>{article.name}</h3>
                <p>{article.description}</p>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
        ))
      }
    </Carousel>
  )
}
