import { usePhotoFetchOne } from '@imagine-cms/client';
import React, { useEffect } from 'react';
import { useRoute } from 'wouter';

export function ProfileViewPhotoScreen() {
  const [_, params] = useRoute<{ photoID: string }>('/photos/:photoID');

  const photoID = Number(params!.photoID);

  const { data, fetch } = usePhotoFetchOne();

  useEffect(() => {
    fetch(photoID)
  }, [photoID]);

  return (
    <>
      View Photo {data?.id}
    </>
  )
}