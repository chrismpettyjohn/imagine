import React from 'react';
import { MostCreditsGrid } from './most-credits-grid/MostCreditsGrid';
import { MostVIPPointsGrid } from './most-vip-points-grid/MostVIPPointsGrid';
import { MostActivityPointsGrid } from './most-activity-points-grid/MostActivityPointsGrid';

export function CommunityHighScoresScreen() {
  return (
    <>
      <h1>Top Players</h1>
      <br />
      <MostCreditsGrid />
      <br />
      <MostActivityPointsGrid />
      <br />
      <MostVIPPointsGrid />
    </>
  )
}
