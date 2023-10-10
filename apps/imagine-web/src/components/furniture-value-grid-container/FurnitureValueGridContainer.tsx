import DayJS from 'dayjs';
import { Link } from 'wouter';
import { GridLarge } from '../grid/Grid.remix';
import React, { useEffect, useState } from 'react';
import { FurnitureIcon } from '../furniture-icon/FurnitureIcon';
import { FurnitureValueGridContainerProps, FurnitureValueSales } from './FurnitureValueGridContainer.types';
import { FurnitureValueGridContainerElement, FurnitureValueGridContainerStatElement } from './FurnitureValueGridContainer.styled';
import { useFurniturePurchaseLogOverviewFetchOne, usefurniturePurchaseLogsOverviewTotalSellsForTimeRange } from '@imagine-cms/client';

const THIS_WEEKS_START_DATE = DayJS().unix();
const THIS_WEEKS_END_DATE = DayJS().subtract(1, 'week').unix();

const LAST_WEEKS_START_DATE = DayJS(THIS_WEEKS_END_DATE).subtract(1, 'week').unix();
const LAST_WEEKS_END_DATE = THIS_WEEKS_END_DATE

export function FurnitureValueGridContainer({ furniture }: FurnitureValueGridContainerProps) {
  const [sellsChange, setSellsChange] = useState<FurnitureValueSales>();
  const fetchPurchaseLogOverview = useFurniturePurchaseLogOverviewFetchOne();
  const fetchTotalSells = usefurniturePurchaseLogsOverviewTotalSellsForTimeRange();

  const onFetchFurniValue = async () => {
    await fetchPurchaseLogOverview.fetch({ furnitureID: furniture.id });
    const thisWeeksSells = await fetchTotalSells.fetch({ furnitureID: furniture.id, startDate: THIS_WEEKS_START_DATE, endDate: THIS_WEEKS_END_DATE })
    const lastWeeksSells = await fetchTotalSells.fetch({ furnitureID: furniture.id, startDate: LAST_WEEKS_START_DATE, endDate: LAST_WEEKS_END_DATE })
    const difference = Number(thisWeeksSells - lastWeeksSells)
    const differencePercent = Number(thisWeeksSells / lastWeeksSells).toFixed(2)
    setSellsChange({
      lastWeek: lastWeeksSells,
      thisWeek: thisWeeksSells,
      difference,
      differencePercent,
    })
  }

  useEffect(() => {
    onFetchFurniValue();
  }, [furniture.id]);

  return (
    <Link to={`/values/${furniture.id}`}>
      <FurnitureValueGridContainerElement>
        <h2>{furniture.publicName}</h2>
        <br />
        <div style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
          <FurnitureIcon furniture={furniture} style={{ maxHeight: 75, objectFit: 'contain' }} />
        </div>
        <br />
        <GridLarge style={{ height: 150 }}>
          <FurnitureValueGridContainerStatElement>
            <img src="/img/credits.svg" loading="lazy" />
            {Number(fetchPurchaseLogOverview.data?.averageCostCredits ?? 0).toLocaleString()}
          </FurnitureValueGridContainerStatElement>
          <FurnitureValueGridContainerStatElement>
            <img src="/img/diamonds.svg" loading="lazy" />
            {Number(fetchPurchaseLogOverview.data?.averageCostPoints ?? 0).toLocaleString()}
          </FurnitureValueGridContainerStatElement>
          <FurnitureValueGridContainerStatElement>
            <i className="fa fa-shopping-cart" style={{ marginRight: 8 }} />
            {Number(fetchPurchaseLogOverview.data?.totalSells ?? 0).toLocaleString()}
          </FurnitureValueGridContainerStatElement>
          <FurnitureValueGridContainerStatElement style={{ color: sellsChange?.difference ? sellsChange.difference > 0 ? 'green' : 'red' : 'initial' }}>
            <i className="fa fa-percent" style={{ marginRight: 8 }} />
            {Number(sellsChange?.difference ?? 0).toLocaleString()}
          </FurnitureValueGridContainerStatElement>
          <div></div>
        </GridLarge>
      </FurnitureValueGridContainerElement>
    </Link>
  )
}