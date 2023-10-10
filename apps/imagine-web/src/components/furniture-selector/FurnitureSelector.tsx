import Select from 'react-select/async'
import React, { useEffect, useMemo } from 'react';
import { useFurnitureFetchMany } from '@imagine-cms/client';
import { FurnitureIcon } from '../furniture-icon/FurnitureIcon';
import { FurnitureSelectorProps } from './FurnitureSelector.types';

export function FurnitureSelector({ furnitureID, onChange }: FurnitureSelectorProps) {
  const fetchFurniture = useFurnitureFetchMany();

  useEffect(() => {
    if (furnitureID === undefined) {
      return;
    }
    fetchFurniture.fetch({ ids: [furnitureID] });
  }, [furnitureID]);

  const defaultInputValue = useMemo<any>(() => {
    if (furnitureID === undefined) {
      return undefined;
    }

    const matchingFurni = fetchFurniture.data?.[0];
    if (matchingFurni?.id !== furnitureID) {
      return undefined;
    }

    return matchingFurni.publicName
  }, [furnitureID, fetchFurniture.data?.[0]?.id]);

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

  const onSelectRare = (newFurni: { label: string, value: number }) => {
    onChange(newFurni.value);
  }

  return (
    <div style={{ width: '100%' }}>
      <Select cacheOptions defaultOptions inputValue={defaultInputValue} loadOptions={onSearchRares} onChange={onSelectRare as any} />
    </div>
  )
}