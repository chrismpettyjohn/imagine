import { Link, useRoute } from 'wouter';
import React, { useEffect } from 'react';
import { useFurnitureFetchOne } from '@imagine-cms/client';
import { FurnitureValueGridContainer } from '../../components/furniture-value-grid-container/FurnitureValueGridContainer';

export function ValuesViewItemScreen() {
  const [, params] = useRoute<{ furnitureID: string }>('/values/:furnitureID');
  const fetchFurniture = useFurnitureFetchOne();
  const furnitureID = Number(params!.furnitureID);

  useEffect(() => {
    fetchFurniture.fetch({ id: furnitureID })
  }, [furnitureID]);

  return (
    <>
      <h1><Link to="/values"><i className="fa fa-caret-left" style={{ marginRight: 8 }} /></Link>Rare Values</h1>
      {fetchFurniture.data && <FurnitureValueGridContainer furniture={fetchFurniture.data} />}
    </>
  )
}