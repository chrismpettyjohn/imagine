import { useLazyQuery } from "@apollo/client";
import { ArticleFragment } from "./article.fragment";
import { ArticleFilterOneInput } from "./article.input";
import { ARTICLE_FETCH_ONE_QUERY, ArticleFetchOneQueryResponse, ArticleFetchOneQueryVariables } from "./article-fetch-one.query";

export interface UseArticleFetchOneResponse {
  fetch(filter: ArticleFilterOneInput): Promise<ArticleFragment>;
  error?: Error;
  loading: boolean;
  data?: ArticleFragment;
}

export function useArticleFetchOne(): UseArticleFetchOneResponse {
  const [getArticles, { loading, error, data }] = useLazyQuery<ArticleFetchOneQueryResponse, ArticleFetchOneQueryVariables>(ARTICLE_FETCH_ONE_QUERY);

  const onFetchArticles = async (filter: ArticleFilterOneInput): Promise<ArticleFragment> => {
    const matchingArticles = await getArticles({ fetchPolicy: "network-only", variables: { fetchPolicy: "network-only", filter } })
    return matchingArticles.data!.article;
  }

  return {
    fetch: onFetchArticles,
    error,
    loading,
    data: data?.article ?? undefined,
  }
}