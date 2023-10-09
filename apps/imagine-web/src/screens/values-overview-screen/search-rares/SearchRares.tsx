import Select from 'react-select/async'
import React, { useEffect, useMemo } from 'react';
import { useLocation, useRoute } from 'wouter';
import { useFurnitureFetchMany } from '@imagine-cms/client';
import { FurnitureIcon } from '../../../components/furniture-icon/FurnitureIcon';

export function SearchRares() {
  const [, setLocation] = useLocation();
  const [, params] = useRoute<{ furniID?: string }>('/values/:furniID');
  const fetchFurniture = useFurnitureFetchMany();

  useEffect(() => {
    if (params?.furniID === undefined) {
      return;
    }
    const furniID = Number(params.furniID);
    fetchFurniture.fetch({ ids: [furniID] });
  }, [params?.furniID]);

  const defaultInputValue = useMemo<any>(() => {
    if (params?.furniID === undefined) {
      return undefined;
    }

    const furniID = Number(params.furniID);
    const matchingFurni = fetchFurniture.data?.[0];
    if (matchingFurni?.id !== furniID) {
      return undefined;
    }

    return matchingFurni.publicName
  }, [params?.furniID, fetchFurniture.data?.[0]?.id]);

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
    setLocation(`/values/${newFurni.value}`);
  }

  return (
    <div style={{ width: 400 }}>
      <Select cacheOptions defaultOptions inputValue={defaultInputValue} loadOptions={onSearchRares} onChange={onSelectRare as any} />
    </div>
  )
}