import { useLazyQuery } from "@apollo/client";
import { PhotoReactionFilterOneInput } from "./photo-reaction.input";
import { PhotoReactionFragment } from "./photo-reaction.fragment";
import { PHOTO_REACTION_FETCH_ONE_QUERY, PhotoReactionFetchOneResponse, PhotoReactionFetchOneVariables } from "./photo-reaction-fetch-one.query";

export interface UsePhotoReactionFetchOneResponse {
  fetch(filter: PhotoReactionFilterOneInput): Promise<PhotoReactionFragment>;
  error?: Error;
  loading: boolean;
  data?: PhotoReactionFragment;
}

export function usePhotoReactionFetchOne(): UsePhotoReactionFetchOneResponse {
  const [getPhotoReaction, { loading, error, data }] = useLazyQuery<PhotoReactionFetchOneResponse, PhotoReactionFetchOneVariables>(PHOTO_REACTION_FETCH_ONE_QUERY);

  const onFetchPhotoReaction = async (filter: PhotoReactionFilterOneInput): Promise<PhotoReactionFragment> => {
    const matchingPhotoReaction = await getPhotoReaction({ variables: { filter } })
    return matchingPhotoReaction.data!.photoReaction;
  }

  return {
    fetch: onFetchPhotoReaction,
    error,
    loading,
    data: data?.photoReaction,
  }
}