import { useMutation } from "@apollo/client";
import { ArticleCommentFragment } from "./article-comment.fragment";
import { ArticleCommentFilterOneInput, ArticleCommentUpdateInput } from "./article-comment.input";
import { ARTICLE_COMMENT_UPDATE_MUTATION, ArticleCommentUpdateResponse, ArticleCommentUpdateVariables } from "./article-comment-update.mutation";

export interface UseArticleCommentUpdateResponse {
  execute(filter: ArticleCommentFilterOneInput, input: ArticleCommentUpdateInput): Promise<ArticleCommentFragment>;
  error?: Error;
  loading: boolean;
  data?: ArticleCommentFragment;
}

export function useArticleCommentUpdate(): UseArticleCommentUpdateResponse {
  const [getArticleComment, { loading, error, data }] = useMutation<ArticleCommentUpdateResponse, ArticleCommentUpdateVariables>(ARTICLE_COMMENT_UPDATE_MUTATION);

  const onFetchArticleComment = async (filter: ArticleCommentFilterOneInput, input: ArticleCommentUpdateInput): Promise<ArticleCommentFragment> => {
    const matchingArticleComment = await getArticleComment({ fetchPolicy: "network-only", variables: { fetchPolicy: "network-only", filter, input } })
    return matchingArticleComment.data!.articleComment;
  }

  return {
    execute: onFetchArticleComment,
    error,
    loading,
    data: data?.articleComment,
  }
}