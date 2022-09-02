import React from 'react';
import {UserContainer} from './user-container/UserContainer';
import {SocialMediaButtons} from '../../components/social-media/SocialMediaButtons';
import {LatestArticlesSlider} from '../../components/latest-articles-slider/LatestArticlesSlider';

export function MeScreen() {
  return (
    <main className="position-relative container justify-content-center py-4">
      <div className="row">
        <div className="col-lg-9 col-12">
          <UserContainer />
          <LatestArticlesSlider />
        </div>
        <div className="col-lg-3 col-12">
          <SocialMediaButtons />
        </div>
      </div>
    </main>
  )
}
