import React, {useEffect} from 'react';
import {useFetchLatestBadges} from '../../hooks/fetch-latest-badges.hook';

export function LatestBadgesCard() {
  const {runQuery, loading, data} = useFetchLatestBadges();

  useEffect(() => {
    runQuery();
  }, []);

  return (
    <>
      <h5 className="silver">Latest Badges
        <span className="float-right">
          <i className="fas fa-newspaper" />
        </span>
      </h5>
      <div id="sidebar-badges" className="card">
        <div className="card-body">
          {
            loading && (
              <i className="fa fa-spinner fa-spin fa-2x" />
            )
          }
          {
            data?.badges?.map(badge => (
              <span className="badge-item" key={`badge_${badge.code}`}>
                <img src={`https://assets.habboon.pw/c_images/album1584//${badge.code}.gif`} alt={badge.code} />
              </span>
            ))
          }
        </div>
      </div>
    </>
  )
}
