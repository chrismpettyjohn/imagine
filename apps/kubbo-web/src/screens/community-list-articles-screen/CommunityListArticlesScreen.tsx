import React, { useEffect } from 'react';
import { useFetchLatestArticles } from '@imagine-cms/web';
import { LatestArticlesGrid } from 'components/latest-articles-grid/LatestArticlesGrid';

export function CommunityListArticlesScreen() {
  const { runQuery, data } = useFetchLatestArticles();

  const latestArticles = data?.articles;

  useEffect(() => {
    runQuery();
  }, [runQuery]);

  return (
    <>
      <section className="row hero-section">
        <div className="col-md-6 offset-md-3 d-flex align-items-center justify-content-center">
          <div className="container text-center">
            <h1>News</h1>
            <p>Discover our amazing community, meet new friends, and explore the latest photos and activities from our users</p>
          </div>
        </div>
      </section>
      <section className="container features-section">
        <h4>Recent Articles</h4>
        <LatestArticlesGrid />
      </section>
    </>
  )
}
