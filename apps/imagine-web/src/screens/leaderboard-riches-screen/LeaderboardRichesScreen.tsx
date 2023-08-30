import React from 'react';
import { MostPointsCard } from './most-points-card/MostPointsCard';
import { MostCreditsCard } from './most-credits-card/MostCreditsCard';
import { MostDucketsCard } from './most-duckets-card/MostDucketsCard';

export function LeaderboardRichesScreen() {
  return (
    <>
      <section className="row hero-section">
        <div className="col-md-6 offset-md-3 d-flex align-items-center justify-content-center">
          <div className="container text-center">
            <h1>Richest Users</h1>
            <p>The best players based on their riches, skills or community presence.</p>
          </div>
        </div>
      </section>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <MostCreditsCard />
          </div>
          <div className="col-md-6">
            <MostDucketsCard />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <MostPointsCard />
          </div>
        </div>
      </div>
    </>
  )
}
