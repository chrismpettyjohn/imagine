import { useMutation } from "@apollo/client";
import { PhotoCommentDeleteInput } from "./photo-comment.input";
import { PHOTO_COMMENT_DELETE_MUTATION, PhotoCommentDeleteResponse, PhotoCommentDeleteVariables } from "./photo-comment-delete.mutation";

export interface UsePhotoCommentDeleteResponse {
  execute(input: PhotoCommentDeleteInput): Promise<void>;
  error?: Error;
  loading: boolean;
}

export function usePhotoCommentDelete(): UsePhotoCommentDeleteResponse {
  const [getPhotoComment, { loading, error }] = useMutation<PhotoCommentDeleteResponse, PhotoCommentDeleteVariables>(PHOTO_COMMENT_DELETE_MUTATION);

  const onFetchPhotoComment = async (input: PhotoCommentDeleteInput): Promise<void> => {
    const matchingPhotoComment = await getPhotoComment({ fetchPolicy: "network-only", variables: { input } })
  }

  return {
    execute: onFetchPhotoComment,
    error,
    loading,
  }
}