import React, {useContext, useEffect} from 'react';
import {configContext, useFetchLatestGroups} from '@imagine-cms/web';
import {LoadingOverlay} from '../../../components/loading-overlay/LoadingOverlay';

export function LatestGroups() {
  const {config} = useContext(configContext);
  const {runQuery, data, loading} = useFetchLatestGroups(4);
  const latestGroups = data?.groups;

  useEffect(() => {
    runQuery();
  }, [runQuery]);


  return (
    <LoadingOverlay loading={loading}>
      <div className="card">
        <div className="card-header">
          <div className="card-header-title-container d-flex">
            <div className="background-gray card-header-icon-container">
              <div className="icon groups" />
            </div>
            <div className="card-header-titles">
              <div className="card-header-title">Latest Groups</div>
              <span className="card-header-subtitle">Check out some of the newest groups</span></div>
          </div>
        </div>
        <div className="card-body">
          {
            latestGroups?.map(group => (
              <div className="d-flex" key={`latest_group_${group.id}`}>
                <img src={`${config!.groupBadgeURL!}/${group.badge}.png`} />
                <div className="ms-3">
                  <div style={{fontWeight: 500}}>{group.name}</div>
                  <span>{group.description}</span></div></div>
            ))
          }
        </div>
      </div>
    </LoadingOverlay>
  )
}
