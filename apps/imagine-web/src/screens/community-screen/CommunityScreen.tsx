import React from 'react';
import { LatestPhotosGrid } from 'components/latest-photos-grid/LatestPhotosGrid';
import { LatestArticlesGrid } from 'components/latest-articles-grid/LatestArticlesGrid';

export function CommunityScreen() {
  return (
    <>
      <section className="row hero-section">
        <div className="col-md-6 offset-md-3 d-flex align-items-center justify-content-center">
          <div className="container text-center">
            <h1>Community</h1>
            <p>Discover our amazing community, meet new friends, and explore the latest photos and activities from our users. </p>
          </div>
        </div>
      </section>
      <div className="container features-section">
        <h4>Recent Articles</h4>
        <LatestArticlesGrid />
        <h4>Photos</h4>
        <LatestPhotosGrid />
      </div>
    </>
  )
}
