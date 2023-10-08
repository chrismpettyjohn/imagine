import React from 'react';
import { GridLarge } from '../../components/grid/Grid.remix';
import { RecentlyAddedRares } from './recently-added-rares/RecentlyAddedRares';

export function ValuesOverviewScreen() {
  return (
    <>
      <h1>Rare Values</h1>
      <br />
      <GridLarge>
        <div>
          <h2>Top Selling All Time</h2>
          <h2>Top Selling This Week</h2>
        </div>
        <div>
          <h2>Pinned</h2>
          <RecentlyAddedRares />
        </div>
      </GridLarge>
    </>
  )
}