import React, { useEffect } from 'react';
import { usePhotoFetchMany } from '@imagine-cms/client';
import { PhotosGridContainer } from '../photos-grid-container/PhotosGridContainer';

export function LatestPhotosContainer() {
  const { data, fetch } = usePhotoFetchMany();

  useEffect(() => {
    fetch({ limit: 8 });
  }, []);
  return <PhotosGridContainer photos={data ?? []} />
}