import { useMutation } from "@apollo/client";
import { ArticleReactionFragment } from "./article-reaction.fragment";
import { ArticleReactionFilterOneInput, ArticleReactionUpdateInput } from "./article-reaction.input";
import { ARTICLE_REACTION_UPDATE_MUTATION, ArticleReactionUpdateResponse, ArticleReactionUpdateVariables } from "./article-reaction-update.mutation";

export interface UseArticleReactionUpdateResponse {
  execute(filter: ArticleReactionFilterOneInput, input: ArticleReactionUpdateInput): Promise<ArticleReactionFragment>;
  error?: Error;
  loading: boolean;
  data?: ArticleReactionFragment;
}

export function useArticleReactionUpdate(): UseArticleReactionUpdateResponse {
  const [getArticleReaction, { loading, error, data }] = useMutation<ArticleReactionUpdateResponse, ArticleReactionUpdateVariables>(ARTICLE_REACTION_UPDATE_MUTATION);

  const onFetchArticleReaction = async (filter: ArticleReactionFilterOneInput, input: ArticleReactionUpdateInput): Promise<ArticleReactionFragment> => {
    const matchingArticleReaction = await getArticleReaction({ fetchPolicy: "network-only", variables: { fetchPolicy: "network-only", filter, input } })
    return matchingArticleReaction.data!.articleReaction;
  }

  return {
    execute: onFetchArticleReaction,
    error,
    loading,
    data: data?.articleReaction,
  }
}