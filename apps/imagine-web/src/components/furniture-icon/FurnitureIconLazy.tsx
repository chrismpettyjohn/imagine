import React, { useEffect } from 'react';
import { FurnitureIcon } from './FurnitureIcon';
import { useFurnitureFetchOne } from '@imagine-cms/client';

export function FurnitureIconLazy({ furnitureID }: { furnitureID: number }) {
  const fetchFurni = useFurnitureFetchOne();

  useEffect(() => {
    fetchFurni.fetch({ id: furnitureID })
  }, [furnitureID]);

  if (!fetchFurni.data) {
    return <i className="fa fa-spinner fa-spin" />
  }

  return <FurnitureIcon furniture={fetchFurni.data} />
}