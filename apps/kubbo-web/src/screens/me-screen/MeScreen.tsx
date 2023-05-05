import React, { useContext } from 'react';
import { sessionContext } from '@imagine-cms/web';
import { UserContainer } from './user-container/UserContainer';
import { LatestArticlesSlider } from '../../components/latest-articles-slider/LatestArticlesSlider';
import { SocialNetworksCard } from './social-networks-card/SocialNetworksCard';
import { UserOfTheWeek } from 'components/user-of-the-week/UserOfTheWeek';

export function MeScreen() {
  const { session } = useContext(sessionContext);

  return (
    <>
      <section className="row hero-section">
        <div className="col-md-6 offset-md-3 d-flex align-items-center justify-content-center">
          <div className="container text-center">
            <h1>Home</h1>
            <p>Welcome back, <b>{session?.username}</b></p>
          </div>
        </div>
      </section>
      <div className="py-2 mb-3 container">
        <div className="row">
          <div className="col">
            <div className="mb-4">
              <UserContainer />
            </div>
          </div>
          <div className="col">
            <div className="mb-4">
              <SocialNetworksCard />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="mb-4">
              <LatestArticlesSlider />
            </div>
          </div>
          <div className="col">
            <div className="mb-4">
              <UserOfTheWeek />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
