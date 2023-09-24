import { useMutation } from "@apollo/client";
import { ArticleReactionDeleteInput } from "./article-reaction.input";
import { ARTICLE_REACTION_DELETE_MUTATION, ArticleReactionDeleteResponse, ArticleReactionDeleteVariables } from "./article-reaction-delete.mutation";

export interface UseArticleReactionDeleteResponse {
  execute(input: ArticleReactionDeleteInput): Promise<void>;
  error?: Error;
  loading: boolean;
}

export function useArticleReactionDelete(): UseArticleReactionDeleteResponse {
  const [getArticleReaction, { loading, error }] = useMutation<ArticleReactionDeleteResponse, ArticleReactionDeleteVariables>(ARTICLE_REACTION_DELETE_MUTATION);

  const onFetchArticleReaction = async (input: ArticleReactionDeleteInput): Promise<void> => {
    const matchingArticleReaction = await getArticleReaction({ fetchPolicy: "network-only", variables: { fetchPolicy: "network-only", input } })
  }

  return {
    execute: onFetchArticleReaction,
    error,
    loading,
  }
}