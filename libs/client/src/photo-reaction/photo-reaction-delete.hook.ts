import { useMutation } from "@apollo/client";
import { PhotoReactionDeleteInput } from "./photo-reaction.input";
import { PHOTO_REACTION_DELETE_MUTATION, PhotoReactionDeleteResponse, PhotoReactionDeleteVariables } from "./photo-reaction-delete.mutation";

export interface UsePhotoReactionDeleteResponse {
  execute(input: PhotoReactionDeleteInput): Promise<void>;
  error?: Error;
  loading: boolean;
}

export function usePhotoReactionDelete(): UsePhotoReactionDeleteResponse {
  const [getPhotoReaction, { loading, error }] = useMutation<PhotoReactionDeleteResponse, PhotoReactionDeleteVariables>(PHOTO_REACTION_DELETE_MUTATION);

  const onFetchPhotoReaction = async (input: PhotoReactionDeleteInput): Promise<void> => {
    const matchingPhotoReaction = await getPhotoReaction({ fetchPolicy: "network-only", variables: { input } })
  }

  return {
    execute: onFetchPhotoReaction,
    error,
    loading,
  }
}