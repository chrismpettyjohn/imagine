import React from 'react';
import {LatestBadges} from './latest-badges/LatestBadges';
import {PopularRooms} from './popular-rooms/PopularRooms';
import {LatestGroups} from './latest-groups/LatestGroups';
import {OnlineFriends} from './online-friends/OnlineFriends';
import {LatestArticles} from './latest-articles/LatestArticles';
import {UserGuard} from '../../components/user-guard/UserGuard';

export function HomeScreen() {
  return (
    <div id="homeComponent">
      <div className="row">
        <div className="col-md-8">
          <div className="row mb-4">
            <div className="col-12">
              <LatestArticles />
            </div>
          </div>
          <div className="row mb-4">
            <div className="col col col-lg-6">
              <LatestBadges />
            </div>
            <UserGuard>
              <div className="col col col-lg-6">
                <OnlineFriends />
              </div>
            </UserGuard>
          </div>
        </div>
        <div className="col mb-4">
          <div className="row mb-2">
            <div className="col-12">
              <PopularRooms />
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-12">
              <LatestGroups />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
