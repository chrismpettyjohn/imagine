import {Link} from 'wouter';
import React, {useContext, useEffect} from 'react';
import {UserOnlineStatus} from '@imagine-cms/types';
import {configContext, useFetchStaffRanks} from '@imagine-cms/web';
import {UserLayout} from '../../components/user-layout/UserLayout';
import {LoadingOverlay} from '../../components/loading-overlay/LoadingOverlay';

export function CommunityStaffScreen() {
  const {config} = useContext(configContext);
  const {runQuery, loading, data} = useFetchStaffRanks();

  useEffect(() => {
    runQuery()
  }, []);

  return (
    <UserLayout>
      <LoadingOverlay loading={loading}>
        <div className="container">
          {
            data?.ranks?.map(rank => (
              <div key={`rank_${rank.id}`}>
                <div className="row">
                  <div className="col-12">
                    <div id="title-headline">{rank.name}</div>
                  </div>
                </div>
                <div className="row">
                  {
                    rank.users?.map(user => (
                      <div className="col-4">
                        <Link to={`/profile/${user.username}`} className="staff-box">
                          <div className="staff-header">
                            <div className="header"></div>
                            <div className="overlay">
                              <div className="username">{user.username}</div>
                            </div>
                          </div>
                          <div className="avatarimage" style={{backgroundImage: `url(https://imager.habboon.pw/?figure=${user.look}&size=l)`}} />
                          <div className="clear" />
                          <div className="png">
                            <div className="motto">{user.motto}</div>
                            <div className={`online-status ${user.onlineStatus === UserOnlineStatus.Online ? 'online' : 'offline'}`}>
                              <div className="dot" />
                            </div>
                            <div className="clear" />
                          </div>
                          <div className="clear" />
                        </Link>
                      </div>
                    ))
                  }
                </div>
              </div>
            ))
          }
        </div>
      </LoadingOverlay>
    </UserLayout>
  )
}
