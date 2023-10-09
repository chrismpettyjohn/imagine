import { useLocation } from 'wouter';
import Select from 'react-select/async'
import React, { useState } from 'react';
import { FurnitureFragment, useFurnitureFetchMany } from '@imagine-cms/client';
import { FurnitureIcon } from '../../../components/furniture-icon/FurnitureIcon';

export function SearchRares() {
  const [, setLocation] = useLocation();
  const fetchFurniture = useFurnitureFetchMany();

  const onSearchRares = async (query: string) => {
    const response = await fetchFurniture.fetch({ itemName: query, limit: 10 });
    return response.map(_ => ({
      label: (
        <>
          <FurnitureIcon furniture={_} style={{ height: 30, width: 30 }} />
          <b> {_.publicName}</b>
        </>
      ),
      value: _.id,
    }))
  }

  const onSelectRare = (newFurni: FurnitureFragment) => {
    setLocation(`/values/${newFurni.id}`);
  }

  return (
    <div style={{ width: 400 }}>
      <Select cacheOptions defaultOptions loadOptions={onSearchRares} onChange={onSelectRare as any} />
    </div>
  )
}