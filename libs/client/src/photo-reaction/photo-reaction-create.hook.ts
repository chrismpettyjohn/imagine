import { useMutation } from "@apollo/client";
import { PhotoReactionCreateInput } from "./photo-reaction.input";
import { PhotoReactionFragment } from "./photo-reaction.fragment";
import { PHOTO_REACTION_CREATE_MUTATION, PhotoReactionCreateResponse, PhotoReactionCreateVariables } from "./photo-reaction-create.mutation";

export interface UsePhotoReactionCreateResponse {
  execute(input: PhotoReactionCreateInput): Promise<PhotoReactionFragment>;
  error?: Error;
  loading: boolean;
  data?: PhotoReactionFragment;
}

export function usePhotoReactionCreate(): UsePhotoReactionCreateResponse {
  const [getPhotoReaction, { loading, error, data }] = useMutation<PhotoReactionCreateResponse, PhotoReactionCreateVariables>(PHOTO_REACTION_CREATE_MUTATION);

  const onFetchPhotoReaction = async (input: PhotoReactionCreateInput): Promise<PhotoReactionFragment> => {
    const matchingPhotoReaction = await getPhotoReaction({ variables: { input } })
    return matchingPhotoReaction.data!.photoReaction;
  }

  return {
    execute: onFetchPhotoReaction,
    error,
    loading,
    data: data?.photoReaction,
  }
}