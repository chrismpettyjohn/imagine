import { useLazyQuery } from "@apollo/client";
import { PhotoFilterOneInput } from "./photo.input";
import { PhotoFragment } from "./photo.fragment";
import { PHOTO_FETCH_ONE_QUERY, PhotoFetchOneResponse, PhotoFetchOneVariables } from "./photo-fetch-one.query";

export interface UsePhotoFetchOneResponse {
  fetch(filter: PhotoFilterOneInput): Promise<PhotoFragment>;
  error?: Error;
  loading: boolean;
  data?: PhotoFragment;
}

export function usePhotoFetchOne(): UsePhotoFetchOneResponse {
  const [getPhoto, { loading, error, data }] = useLazyQuery<PhotoFetchOneResponse, PhotoFetchOneVariables>(PHOTO_FETCH_ONE_QUERY);

  const onFetchPhoto = async (filter: PhotoFilterOneInput): Promise<PhotoFragment> => {
    const matchingPhoto = await getPhoto({ fetchPolicy: "network-only", variables: { fetchPolicy: "network-only", filter } })
    return matchingPhoto.data!.photo;
  }

  return {
    fetch: onFetchPhoto,
    error,
    loading,
    data: data?.photo,
  }
}