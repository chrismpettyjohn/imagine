import { useMutation } from "@apollo/client";
import { ArticleCommentCreateInput } from "./article-comment.input";
import { ArticleCommentFragment } from "./article-comment.fragment";
import { ARTICLE_COMMENT_CREATE_MUTATION, ArticleCommentCreateResponse, ArticleCommentCreateVariables } from "./article-comment-create.mutation";

export interface UseArticleCommentCreateResponse {
  execute(input: ArticleCommentCreateInput): Promise<ArticleCommentFragment>;
  error?: Error;
  loading: boolean;
  data?: ArticleCommentFragment;
}

export function useArticleCommentCreate(): UseArticleCommentCreateResponse {
  const [getArticleComment, { loading, error, data }] = useMutation<ArticleCommentCreateResponse, ArticleCommentCreateVariables>(ARTICLE_COMMENT_CREATE_MUTATION);

  const onFetchArticleComment = async (input: ArticleCommentCreateInput): Promise<ArticleCommentFragment> => {
    const matchingArticleComment = await getArticleComment({ variables: { input } })
    return matchingArticleComment.data!.articleComment;
  }

  return {
    execute: onFetchArticleComment,
    error,
    loading,
    data: data?.articleComment,
  }
}