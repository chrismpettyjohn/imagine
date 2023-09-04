import { useLazyQuery } from "@apollo/client";
import { ArticleReactionFilterManyInput } from "./article-reaction.input";
import { ArticleReactionFragment } from "./article-reaction.fragment";
import { ARTICLE_REACTION_FETCH_MANY_QUERY, ArticleReactionFetchManyQueryResponse, ArticleReactionFetchManyQueryVariables } from "./article-reaction-fetch-many.query";

export interface UseArticleReactionFetchManyResponse {
  fetch(filter: ArticleReactionFilterManyInput): Promise<ArticleReactionFragment[]>;
  error?: Error;
  loading: boolean;
  data?: ArticleReactionFragment[];
}

export function useArticleReactionFetchMany(): UseArticleReactionFetchManyResponse {
  const [getArticleReactions, { loading, error, data }] = useLazyQuery<ArticleReactionFetchManyQueryResponse, ArticleReactionFetchManyQueryVariables>(ARTICLE_REACTION_FETCH_MANY_QUERY);

  const onFetchArticleReactions = async (filter: ArticleReactionFilterManyInput): Promise<ArticleReactionFragment[]> => {
    const matchingArticleReactions = await getArticleReactions({ variables: { filter } })
    return matchingArticleReactions.data!.articleReactions;
  }

  return {
    fetch: onFetchArticleReactions,
    error,
    loading,
    data: data?.articleReactions,
  }
}