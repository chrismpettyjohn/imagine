import { useMutation } from "@apollo/client";
import { PhotoCommentCreateInput } from "./photo-comment.input";
import { PhotoCommentFragment } from "./photo-comment.fragment";
import { PHOTO_COMMENT_CREATE_MUTATION, PhotoCommentCreateResponse, PhotoCommentCreateVariables } from "./photo-comment-create.mutation";

export interface UsePhotoCommentCreateResponse {
  execute(input: PhotoCommentCreateInput): Promise<PhotoCommentFragment>;
  error?: Error;
  loading: boolean;
  data?: PhotoCommentFragment;
}

export function usePhotoCommentCreate(): UsePhotoCommentCreateResponse {
  const [getPhotoComment, { loading, error, data }] = useMutation<PhotoCommentCreateResponse, PhotoCommentCreateVariables>(PHOTO_COMMENT_CREATE_MUTATION);

  const onFetchPhotoComment = async (input: PhotoCommentCreateInput): Promise<PhotoCommentFragment> => {
    const matchingPhotoComment = await getPhotoComment({ fetchPolicy: "network-only", variables: { input } })
    return matchingPhotoComment.data!.photoComment;
  }

  return {
    execute: onFetchPhotoComment,
    error,
    loading,
    data: data?.photoComment,
  }
}