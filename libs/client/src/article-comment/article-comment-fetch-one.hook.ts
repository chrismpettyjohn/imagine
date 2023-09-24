import { useLazyQuery } from "@apollo/client";
import { ArticleCommentFilterOneInput } from "./article-comment.input";
import { ArticleCommentFragment } from "./article-comment.fragment";
import { ARTICLE_COMMENT_FETCH_ONE_QUERY, ArticleCommentFetchOneResponse, ArticleCommentFetchOneVariables } from "./article-comment-fetch-one.query";

export interface UseArticleCommentFetchOneResponse {
  fetch(filter: ArticleCommentFilterOneInput): Promise<ArticleCommentFragment>;
  error?: Error;
  loading: boolean;
  data?: ArticleCommentFragment;
}

export function useArticleCommentFetchOne(): UseArticleCommentFetchOneResponse {
  const [getArticleComment, { loading, error, data }] = useLazyQuery<ArticleCommentFetchOneResponse, ArticleCommentFetchOneVariables>(ARTICLE_COMMENT_FETCH_ONE_QUERY);

  const onFetchArticleComment = async (filter: ArticleCommentFilterOneInput): Promise<ArticleCommentFragment> => {
    const matchingArticleComment = await getArticleComment({ fetchPolicy: "network-only", variables: { fetchPolicy: "network-only", filter } })
    return matchingArticleComment.data!.articleComment;
  }

  return {
    fetch: onFetchArticleComment,
    error,
    loading,
    data: data?.articleComment,
  }
}