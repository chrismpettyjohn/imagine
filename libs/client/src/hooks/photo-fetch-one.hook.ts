import { useLazyQuery } from "@apollo/client";
import { PhotoFragment } from "../fragments/photo.fragment";
import { PHOTO_FETCH_ONE_QUERY, PhotoFetchOneResponse, PhotoFetchOneVariables } from "../queries/photo-fetch-one.query";

export interface UsePhotoFetchOneResponse {
  fetch(photoID: number): Promise<PhotoFragment>;
  error?: Error;
  loading: boolean;
  data?: PhotoFragment;
}

export function usePhotoFetchOne(): UsePhotoFetchOneResponse {
  const [getPhoto, { loading, error, data }] = useLazyQuery<PhotoFetchOneResponse, PhotoFetchOneVariables>(PHOTO_FETCH_ONE_QUERY);

  const onFetchPhoto = async (photoID: number): Promise<PhotoFragment> => {
    const matchingPhoto = await getPhoto({ variables: { photoID } })
    console.log(matchingPhoto)
    return matchingPhoto.data!.photo;
  }

  return {
    fetch: onFetchPhoto,
    error,
    loading,
    data: data?.photo,
  }
}