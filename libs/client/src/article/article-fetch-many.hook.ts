import { useLazyQuery } from "@apollo/client";
import { ArticleFragment } from "./article.fragment";
import { ArticleFilterManyInput } from "./article.input";
import { ARTICLE_FETCH_MANY_QUERY, ArticleFetchManyQueryResponse, ArticleFetchManyQueryVariables } from "./article-fetch-many.query";

export interface UseArticleFetchManyResponse {
  fetch(filter: ArticleFilterManyInput): Promise<ArticleFragment[]>;
  error?: Error;
  loading: boolean;
  data?: ArticleFragment[];
}

export function useArticleFetchMany(): UseArticleFetchManyResponse {
  const [getArticles, { loading, error, data }] = useLazyQuery<ArticleFetchManyQueryResponse, ArticleFetchManyQueryVariables>(ARTICLE_FETCH_MANY_QUERY);

  const onFetchArticles = async (filter: ArticleFilterManyInput): Promise<ArticleFragment[]> => {
    const matchingArticles = await getArticles({ fetchPolicy: "network-only", variables: { filter } })
    return matchingArticles.data!.articles;
  }

  return {
    fetch: onFetchArticles,
    error,
    loading,
    data: data?.articles,
  }
}