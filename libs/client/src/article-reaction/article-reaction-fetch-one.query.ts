import gql from 'graphql-tag';
import { ArticleReactionFilterOneInput } from './article-reaction.input';
import { ARTICLE_REACTION_FRAGMENT, ArticleReactionFragment } from './article-reaction.fragment';

export const ARTICLE_REACTION_FETCH_ONE_QUERY: any = gql`
  ${ARTICLE_REACTION_FRAGMENT}
  query($filter: ArticleReactionFilterOneInput) {
    articleReaction(filter: $filter) {
      ...ArticleReactionFragment
    }
  }
`

export interface ArticleReactionFetchOneResponse {
  articleReaction: ArticleReactionFragment;
}

export interface ArticleReactionFetchOneVariables {
  filter: ArticleReactionFilterOneInput;
}