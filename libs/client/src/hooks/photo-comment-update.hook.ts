import { useMutation } from "@apollo/client";
import { PhotoCommentFragment } from "../fragments/photo-comment.fragment";
import { PhotoCommentFilterOneInput, PhotoCommentUpdateInput } from "../input/photo-comment.input";
import { PHOTO_COMMENT_UPDATE_MUTATION, PhotoCommentUpdateResponse, PhotoCommentUpdateVariables } from "../mutations/photo-comment-update.mutation";

export interface UsePhotoCommentUpdateResponse {
  execute(filter: PhotoCommentFilterOneInput, input: PhotoCommentUpdateInput): Promise<PhotoCommentFragment>;
  error?: Error;
  loading: boolean;
  data?: PhotoCommentFragment;
}

export function usePhotoCommentUpdate(): UsePhotoCommentUpdateResponse {
  const [getPhotoComment, { loading, error, data }] = useMutation<PhotoCommentUpdateResponse, PhotoCommentUpdateVariables>(PHOTO_COMMENT_UPDATE_MUTATION);

  const onFetchPhotoComment = async (filter: PhotoCommentFilterOneInput, input: PhotoCommentUpdateInput): Promise<PhotoCommentFragment> => {
    const matchingPhotoComment = await getPhotoComment({ variables: { filter, input } })
    return matchingPhotoComment.data!.photoComment;
  }

  return {
    execute: onFetchPhotoComment,
    error,
    loading,
    data: data?.photoComment,
  }
}