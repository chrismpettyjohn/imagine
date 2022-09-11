import React, {useContext, useEffect} from 'react';
import {UserOnlineStatus} from '@imagine-cms/types';
import {configContext, useFetchStaffRanks} from '@imagine-cms/web';

export function CommunityStaffScreen() {
  const {config} = useContext(configContext);
  const {runQuery, loading, data} = useFetchStaffRanks();

  useEffect(() => {
    runQuery()
  }, []);

  return (
    <div id="staffComponent" className="">
      {
        data?.ranks?.map(rank => (
          <div className="row" key={`rank_${rank.id}`}>
            <div className="rank col-md-12">
              <div className="card">
                <div className="card-header card-header-right-image moving">
                  <div className="card-header-title-container ng-star-inserted">
                    <div className="background-gray card-header-icon-container">
                      <img src={`${config!.groupBadgeURL!}/${rank.badgeCode}.png`} />
                    </div>
                    <div className="card-header-titles ng-star-inserted">
                      <div className="card-header-title mt-2"><h5>{rank.name}</h5></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {
              rank.users?.map(user => (
                <div className="col-md-4 mt-4" key={`rank_user_${user.id}`}>
                  <div className="card">
                    <div className="card-content no-spacing">
                      <div className="staffUser d-flex justify-content-between align-content-center">
                        <div className="align-content-center d-flex">
                          <div className="avatar">
                            <img className="avatar avatar-m" src={`https://www.habbo.com/habbo-imaging/avatarimage?figure=${user.look}&head_direction=3&direction=2&crr=3&gesture=sml&size=m&headonly=0`} />
                          </div>
                          <div className="information d-flex flex-column">
                            <span className="username">
                              {user.username}
                            </span>
                          </div>
                        </div>
                        <div className="d-flex">
                          <i className={user.onlineStatus === UserOnlineStatus.Online ? 'icon-online' : 'icon-offline'} />
                        </div>
                      </div>
                      <div className="staffMotto">
                        {user.motto}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
            {
              !rank.users && (
                <div className="col-12 mt-4">
                  <div className="card">
                    <div className="card-content text-center">
                      <p>There are no users in this role</p>
                    </div>
                  </div>
                </div>
              )
            }
          </div>
        ))
      }
    </div>
  )
}
