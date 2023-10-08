import React from 'react';
import { GridLarge } from '../../components/grid/Grid.remix';

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
          <h2>Recently Added</h2>
        </div>
      </GridLarge>
    </>
  )
}