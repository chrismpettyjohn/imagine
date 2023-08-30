import { Link } from 'wouter';
import React, { useEffect } from 'react';
import { useFetchLatestArticles } from '@imagine-cms/web';

export function LatestArticlesGrid() {
  const { runQuery, loading, data } = useFetchLatestArticles();
  const latestArticles = data?.articles;

  useEffect(() => {
    runQuery();
  }, [runQuery]);

  return (
    <div className="row">
      {
        latestArticles?.map(article => (
          <div className="col-lg-4 col-md-6 d-flex" key={`article_${article.id}`}>
            <div className="card border-primary mb-3" style={{ background: `url(${article.imageURL}) no-repeat center`, backgroundSize: 'cover', height: 180, width: '100%' }}>
              <div className="card-body">
                <Link to={`/community/articles/${article.id}`} className="btn btn-sm btn-danger font-weight-bold">View More</Link>
              </div>
              <div className="background-opacity" style={{ padding: 10, height: '65%' }}>
                <h6 className="card-title text-white"><b>{article.name}</b></h6>
                <span className="text-white"><small></small></span>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}
