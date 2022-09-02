import React, {useEffect} from 'react';
import {ArticleCard} from '../article-card/ArticleCard';
import {useFetchLatestArticles} from '@imagine-cms/web';

export function LatestArticlesGrid() {
  const {runQuery, loading, data} = useFetchLatestArticles();
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
            loading && <i className="fa fa-spinner fa-spin" />
          }
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
