import React from 'react';
import {UserLayout} from '../../components/user-layout/UserLayout';
import {LatestArticlesSlider} from './latest-articles-slider/LatestArticlesSlider';

export function MeScreen() {
  return (
    <UserLayout>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <LatestArticlesSlider />
          </div>
        </div>
      </div>
    </UserLayout>
  )
}
