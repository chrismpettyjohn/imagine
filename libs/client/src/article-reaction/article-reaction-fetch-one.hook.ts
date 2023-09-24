import { useLazyQuery } from "@apollo/client";
import { ArticleReactionFilterOneInput } from "./article-reaction.input";
import { ArticleReactionFragment } from "./article-reaction.fragment";
import { ARTICLE_REACTION_FETCH_ONE_QUERY, ArticleReactionFetchOneResponse, ArticleReactionFetchOneVariables } from "./article-reaction-fetch-one.query";

export interface UseArticleReactionFetchOneResponse {
  fetch(filter: ArticleReactionFilterOneInput): Promise<ArticleReactionFragment>;
  error?: Error;
  loading: boolean;
  data?: ArticleReactionFragment;
}

export function useArticleReactionFetchOne(): UseArticleReactionFetchOneResponse {
  const [getArticleReaction, { loading, error, data }] = useLazyQuery<ArticleReactionFetchOneResponse, ArticleReactionFetchOneVariables>(ARTICLE_REACTION_FETCH_ONE_QUERY);

  const onFetchArticleReaction = async (filter: ArticleReactionFilterOneInput): Promise<ArticleReactionFragment> => {
    const matchingArticleReaction = await getArticleReaction({ fetchPolicy: "network-only", variables: { fetchPolicy: "network-only", filter } })
    return matchingArticleReaction.data!.articleReaction;
  }

  return {
    fetch: onFetchArticleReaction,
    error,
    loading,
    data: data?.articleReaction,
  }
}