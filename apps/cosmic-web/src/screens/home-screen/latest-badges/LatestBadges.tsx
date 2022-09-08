import React, {useEffect} from 'react';
import {useFetchLatestBadges} from '@imagine-cms/web';
import {LoadingOverlay} from '../../../components/loading-overlay/LoadingOverlay';

export function LatestBadges() {
  const {runQuery, data, loading} = useFetchLatestBadges(10);
  const latestBadges = data?.badges;

  useEffect(() => {
    runQuery();
  }, [runQuery]);

  return (
    <LoadingOverlay loading={loading}>
      <div className="card">
        <div className="card-header">
          <div className="card-header-title-container d-flex">
            <div className="background-gray card-header-icon-container">
              <div className="icon badges" />
            </div>
            <div className="card-header-titles">
              <div className="card-header-title">Latest Badges</div>
              <span className="card-header-subtitle">The latest badges added in our hotel
</span></div>
          </div>
        </div>
        <div className="card-body">
          <div className="d-flex justify-content-center flex-wrap">
            {
              latestBadges?.map(badge => (
                <div className="badge" key={`badge_${badge.code}`}>
                  <img src={`https://client.habbo.ng/assets/c_images/album1584/${badge.code}.gif`} alt={badge.code} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </LoadingOverlay>
  )
}
