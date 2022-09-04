import {Link} from 'wouter';
import React, {useEffect} from 'react';
import {Carousel} from 'react-bootstrap';
import {useFetchLatestArticles} from '@imagine-cms/web';

export function LatestArticlesSlider() {
  const {runQuery, data} = useFetchLatestArticles();

  const latestArticles = data?.articles;

  useEffect(() => {
    runQuery();
  }, [runQuery]);

  return (
    <Carousel>
      {
        latestArticles?.map(article => (
          <Carousel.Item key={`latest_article_${article.id}`}>
            <Link to={`/community/articles/${article.id}`}>
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
