import React from 'react';
import { GridLarge } from '../../components/grid/Grid.remix';
import { MostCreditsGrid } from './most-credits-grid/MostCreditsGrid';
import { MostVIPPointsGrid } from './most-vip-points-grid/MostVIPPointsGrid';
import { MostActivityPointsGrid } from './most-activity-points-grid/MostActivityPointsGrid';

export function HighScoresScreen() {
  return (
    <>
      <h1>Top Players</h1>
      <GridLarge>
        <MostCreditsGrid />
        <MostActivityPointsGrid />
        <MostVIPPointsGrid />
      </GridLarge>
    </>
  )
}
