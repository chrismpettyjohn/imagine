import gql from 'graphql-tag';
import { ArticleReactionFilterManyInput } from './article-reaction.input';
import { ARTICLE_REACTION_FRAGMENT, ArticleReactionFragment } from "./article-reaction.fragment";

export const ARTICLE_REACTION_FETCH_MANY_QUERY: any = gql`
  ${ARTICLE_REACTION_FRAGMENT}
  query($filter: ArticleReactionFilterManyInput) {
    articleReactions(filter: $filter) {
      ...ArticleReactionFragment
    }
  }
`
export interface ArticleReactionFetchManyQueryResponse {
  articleReactions: ArticleReactionFragment[];
}

export interface ArticleReactionFetchManyQueryVariables {
  filter: ArticleReactionFilterManyInput;
}