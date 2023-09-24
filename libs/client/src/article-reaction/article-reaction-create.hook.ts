import { useMutation } from "@apollo/client";
import { ArticleReactionCreateInput } from "./article-reaction.input";
import { ArticleReactionFragment } from "./article-reaction.fragment";
import { ARTICLE_REACTION_CREATE_MUTATION, ArticleReactionCreateResponse, ArticleReactionCreateVariables } from "./article-reaction-create.mutation";

export interface UseArticleReactionCreateResponse {
  execute(input: ArticleReactionCreateInput): Promise<ArticleReactionFragment>;
  error?: Error;
  loading: boolean;
  data?: ArticleReactionFragment;
}

export function useArticleReactionCreate(): UseArticleReactionCreateResponse {
  const [getArticleReaction, { loading, error, data }] = useMutation<ArticleReactionCreateResponse, ArticleReactionCreateVariables>(ARTICLE_REACTION_CREATE_MUTATION);

  const onFetchArticleReaction = async (input: ArticleReactionCreateInput): Promise<ArticleReactionFragment> => {
    const matchingArticleReaction = await getArticleReaction({ fetchPolicy: "network-only", variables: { input } })
    return matchingArticleReaction.data!.articleReaction;
  }

  return {
    execute: onFetchArticleReaction,
    error,
    loading,
    data: data?.articleReaction,
  }
}