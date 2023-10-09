import React, { useEffect } from 'react';
import { useFurniturePurchaseLogFetchMany } from '@imagine-cms/client';
import { FurnitureValueGridContainerProps } from './FurnitureValueGridContainer.types';
import { FurnitureValueGridContainerElement } from './FurnitureValueGridContainer.styled';

export function FurnitureValueGridContainer({ furniture }: FurnitureValueGridContainerProps) {
  const fetchPurchaseLogs = useFurniturePurchaseLogFetchMany();

  useEffect(() => {
    fetchPurchaseLogs.fetch({ furnitureIDs: [furniture.id], limit: 1 });
  }, [furniture.id]);

  return (
    <FurnitureValueGridContainerElement>
      <h2>Name</h2>
      {furniture.publicName}
      <h2>Average Cost Credits</h2>
      {fetchPurchaseLogs.data?.[0]?.averageCostCredits ?? <i className="fa fa-spinner fa-spin" />}
      <h2>Average Cost Points</h2>
      {fetchPurchaseLogs.data?.[0]?.averageCostPoints ?? <i className="fa fa-spinner fa-spin" />}
    </FurnitureValueGridContainerElement>
  )
}