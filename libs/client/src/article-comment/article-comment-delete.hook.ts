import { useMutation } from "@apollo/client";
import { ArticleCommentDeleteInput } from "./article-comment.input";
import { ARTICLE_COMMENT_DELETE_MUTATION, ArticleCommentDeleteResponse, ArticleCommentDeleteVariables } from "./article-comment-delete.mutation";

export interface UseArticleCommentDeleteResponse {
  execute(input: ArticleCommentDeleteInput): Promise<void>;
  error?: Error;
  loading: boolean;
}

export function useArticleCommentDelete(): UseArticleCommentDeleteResponse {
  const [getArticleComment, { loading, error }] = useMutation<ArticleCommentDeleteResponse, ArticleCommentDeleteVariables>(ARTICLE_COMMENT_DELETE_MUTATION);

  const onFetchArticleComment = async (input: ArticleCommentDeleteInput): Promise<void> => {
    const matchingArticleComment = await getArticleComment({ fetchPolicy: "network-only", variables: { fetchPolicy: "network-only", input } })
  }

  return {
    execute: onFetchArticleComment,
    error,
    loading,
  }
}