import gql from 'graphql-tag';
import React, {useEffect} from 'react';
import {BadgeWire} from '@imagine-cms/types';
import {useRunQuery} from '../../graphql/run-query';

const FETCH_LATEST_BADGES = gql`
    query {
        badges(other: { take: 16, order: { id: "DESC" } }) {
            id,
            code,
        }
    }
`

export function LatestBadgesCard() {
  const {runQuery, loading, data} = useRunQuery<{badges: BadgeWire[]}>(FETCH_LATEST_BADGES)

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
