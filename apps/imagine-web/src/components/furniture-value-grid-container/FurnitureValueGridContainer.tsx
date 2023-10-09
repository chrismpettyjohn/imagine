import { Link } from 'wouter';
import React, { useEffect } from 'react';
import { GridLarge } from '../grid/Grid.remix';
import { ButtonBrand } from '../button/Button.remix';
import { FurnitureIcon } from '../furniture-icon/FurnitureIcon';
import { useFurniturePurchaseLogOverviewFetchOne } from '@imagine-cms/client';
import { FurnitureValueGridContainerProps } from './FurnitureValueGridContainer.types';
import { FurnitureValueGridContainerElement } from './FurnitureValueGridContainer.styled';

export function FurnitureValueGridContainer({ furniture, showViewMore = true }: FurnitureValueGridContainerProps) {
  const fetchPurchaseLogOverview = useFurniturePurchaseLogOverviewFetchOne();

  console.log(fetchPurchaseLogOverview.data, fetchPurchaseLogOverview.error);

  useEffect(() => {
    fetchPurchaseLogOverview.fetch({ furnitureID: furniture.id });
  }, [furniture.id]);

  return (
    <FurnitureValueGridContainerElement>
      <h2>Name</h2>
      <p>{furniture.publicName}</p>
      <br />
      <GridLarge style={{ height: 150 }}>
        <FurnitureIcon furniture={furniture} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div><img src="/img/credits.svg" loading="lazy" /> {Number(fetchPurchaseLogOverview.data?.averageCostCredits ?? 0).toLocaleString()}</div>
          <div><img src="/img/diamonds.svg" loading="lazy" /> {Number(fetchPurchaseLogOverview.data?.averageCostPoints ?? 0).toLocaleString()}</div>
          <div><i className="fa fa-shopping-cart" style={{ marginRight: 8 }} /> {Number(fetchPurchaseLogOverview.data?.totalSells ?? 0).toLocaleString()}</div>
        </div>
      </GridLarge>
      <br />
      {showViewMore && (
        <Link to={`/values/${furniture.id}`}>
          <ButtonBrand>
            <i className="fa fa-eye" style={{ marginRight: 8 }} />
            View More
          </ButtonBrand>
        </Link>
      )}
    </FurnitureValueGridContainerElement>
  )
}