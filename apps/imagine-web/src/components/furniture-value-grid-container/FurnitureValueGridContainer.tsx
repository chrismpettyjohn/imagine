import { Link } from 'wouter';
import React, { useEffect } from 'react';
import { GridLarge } from '../grid/Grid.remix';
import { FurnitureIcon } from '../furniture-icon/FurnitureIcon';
import { useFurniturePurchaseLogOverviewFetchOne } from '@imagine-cms/client';
import { FurnitureValueGridContainerProps } from './FurnitureValueGridContainer.types';
import { FurnitureValueGridContainerElement, FurnitureValueGridContainerStatElement } from './FurnitureValueGridContainer.styled';

export function FurnitureValueGridContainer({ furniture }: FurnitureValueGridContainerProps) {
  const fetchPurchaseLogOverview = useFurniturePurchaseLogOverviewFetchOne();

  useEffect(() => {
    fetchPurchaseLogOverview.fetch({ furnitureID: furniture.id });
  }, [furniture.id]);

  return (
    <Link to={`/values/${furniture.id}`}>
      <FurnitureValueGridContainerElement>
        <h2>{furniture.publicName}</h2>
        <br />
        <div style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
          <FurnitureIcon furniture={furniture} />
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
          <div></div>
        </GridLarge>
      </FurnitureValueGridContainerElement>
    </Link>
  )
}