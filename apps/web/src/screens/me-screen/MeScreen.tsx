import React from 'react';
import {UserContainer} from './user-container/UserContainer';
import {LatestArticlesSlider} from './latest-articles-slider/LatestArticlesSlider';

export function MeScreen() {
  return (
    <main className="position-relative container justify-content-center py-4">
      <div className="row">
        <div className="col-lg-9 col-12">
          <UserContainer />
          <LatestArticlesSlider />
        </div>
        <div className="col-lg-3 col-12">
          <div id="socials" className="mb-3">
            <a href="https://www.facebook.com/habboonltd/" target="_blank" className="facebook-banner" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i> <span>Like us on Facebook!</span>
            </a>
            <a href="https://twitter.com/habboonpw" target="_blank" className="twitter-banner" rel="noopener noreferrer">
              <i className="fab fa-twitter-square"></i> <span>Tweet us on Twitter!</span>
            </a>
            <a href="https://discord.gg/habboon" className="discord-banner">
              <i className="fab fa-discord"></i> <span>Join our Discord</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
