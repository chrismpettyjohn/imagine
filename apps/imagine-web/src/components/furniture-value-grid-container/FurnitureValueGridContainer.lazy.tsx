import { useFurnitureFetchOne } from '@imagine-cms/client';
import React, { useEffect } from 'react';
import { FurnitureValueGridContainer } from './FurnitureValueGridContainer';

export function FurnitureValueGridContainerLazy({ furnitureID }: { furnitureID: number }) {
  const fetchFurniture = useFurnitureFetchOne();

  useEffect(() => {
    fetchFurniture.fetch({ id: furnitureID })
  }, [furnitureID]);

  if (!fetchFurniture.data) {
    return <i className="fa fa-spinner fa-spin" />
  }

  return <FurnitureValueGridContainer furniture={fetchFurniture.data} />
}