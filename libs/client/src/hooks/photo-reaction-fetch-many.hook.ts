import { useLazyQuery } from "@apollo/client";
import { PhotoReactionFilterManyInput } from "../input/photo-reaction.input";
import { PhotoReactionFragment } from "../fragments/photo-reaction.fragment";
import { PHOTO_REACTION_FETCH_MANY_QUERY, PhotoReactionFetchManyQueryResponse, PhotoReactionFetchManyQueryVariables } from "../queries/photo-reaction-fetch-many.query";

export interface UsePhotoReactionFetchManyResponse {
  fetch(filter: PhotoReactionFilterManyInput): Promise<PhotoReactionFragment[]>;
  error?: Error;
  loading: boolean;
  data?: PhotoReactionFragment[];
}

export function usePhotoReactionFetchMany(): UsePhotoReactionFetchManyResponse {
  const [getPhotoReactions, { loading, error, data }] = useLazyQuery<PhotoReactionFetchManyQueryResponse, PhotoReactionFetchManyQueryVariables>(PHOTO_REACTION_FETCH_MANY_QUERY);

  const onFetchPhotoReactions = async (filter: PhotoReactionFilterManyInput): Promise<PhotoReactionFragment[]> => {
    const matchingPhotoReactions = await getPhotoReactions({ variables: { filter } })
    return matchingPhotoReactions.data!.photoReactions;
  }

  return {
    fetch: onFetchPhotoReactions,
    error,
    loading,
    data: data?.photoReactions,
  }
}