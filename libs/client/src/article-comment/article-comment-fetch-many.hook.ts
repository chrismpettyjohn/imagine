import { useLazyQuery } from "@apollo/client";
import { ArticleCommentFilterManyInput } from "./article-comment.input";
import { ArticleCommentFragment } from "./article-comment.fragment";
import { ARTICLE_COMMENT_FETCH_MANY_QUERY, ArticleCommentFetchManyQueryResponse, ArticleCommentFetchManyQueryVariables } from "./article-comment-fetch-many.query";

export interface UseArticleCommentFetchManyResponse {
  fetch(filter: ArticleCommentFilterManyInput): Promise<ArticleCommentFragment[]>;
  error?: Error;
  loading: boolean;
  data?: ArticleCommentFragment[];
}

export function useArticleCommentFetchMany(): UseArticleCommentFetchManyResponse {
  const [getArticleComments, { loading, error, data }] = useLazyQuery<ArticleCommentFetchManyQueryResponse, ArticleCommentFetchManyQueryVariables>(ARTICLE_COMMENT_FETCH_MANY_QUERY);

  const onFetchArticleComments = async (filter: ArticleCommentFilterManyInput): Promise<ArticleCommentFragment[]> => {
    const matchingArticleComments = await getArticleComments({ variables: { filter } })
    return matchingArticleComments.data!.articleComments;
  }

  return {
    fetch: onFetchArticleComments,
    error,
    loading,
    data: data?.articleComments,
  }
}