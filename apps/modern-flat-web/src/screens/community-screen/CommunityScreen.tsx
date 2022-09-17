import React from 'react';
import {LatestBadgesCard} from '../../components/latest-badges-card/LatestBadgesCard';
import {LatestArticlesGrid} from '../../components/latest-articles-grid/LatestArticlesGrid';
import {LatestPhotosCard} from '../../components/latest-photos-card/LatestPhotosCard';

export function CommunityScreen() {
  return (
    <main className="position-relative container justify-content-center py-4">
      <div className="row">
        <div className="col-lg-9 col-12">
          <div className="mb-2">
           <LatestArticlesGrid />
          </div>
          <div className="mb-2">
            <LatestPhotosCard />
          </div>
        </div>
        <div className="col-lg-3 col-12">
          <LatestBadgesCard />
        </div>
      </div>
    </main>
  )
}
