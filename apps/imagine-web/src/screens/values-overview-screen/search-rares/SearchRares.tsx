import React from 'react';
import { useLocation, useRoute } from 'wouter';
import { FurnitureSelector } from '../../../components/furniture-selector/FurnitureSelector';

export function SearchRares() {
  const [, setLocation] = useLocation();
  const [, params] = useRoute<{ furniID?: string }>('/values/:furniID');

  const furniID = params?.furniID ? Number(params.furniID) : undefined;

  const onSelectRare = (furnitureID: number) => {
    setLocation(`/values/${furnitureID}`);
  }

  return (
    <div style={{ width: 400 }}>
      <FurnitureSelector furnitureID={furniID} onChange={onSelectRare} />
    </div>
  )
}