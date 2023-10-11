import React from 'react';
import { MyRares } from './my-rares/MyRares';
import { SearchRares } from './search-rares/SearchRares';
import { GridMedium } from '../../components/grid/Grid.remix';
import { TrendingRares } from './trending-rares/TrendingRares';
import { MyPinnedRares } from './my-pinned-rares/MyPinnedRares';
import { TopSellingRares } from './top-selling-rares/TopSellingRares';
import { LeastSellingRares } from './least-selling-rares/LeastSellingRares';
import { RecentlyAddedRares } from './recently-added-rares/RecentlyAddedRares';
import { MostCostByPointsRares } from './most-cost-by-points-rares/MostCostByPointsRares';
import { MostCostByCreditsRares } from './most-cost-by-credits-rares/MostCostByCreditsRares';

export function ValuesOverviewScreen() {
  return (
    <>
      <div style={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}>
        <h1>Values</h1>
        <SearchRares />

      </div>
      <br />
      <GridMedium>
        <MyPinnedRares />
        <TrendingRares />
        <MyRares />
        <TopSellingRares />
        <RecentlyAddedRares />
        <LeastSellingRares />
        <MostCostByCreditsRares />
        <MostCostByPointsRares />
      </GridMedium>
    </>
  )
}