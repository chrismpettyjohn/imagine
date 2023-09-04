import gql from 'graphql-tag';
import { ArticleReactionCreateInput } from './article-reaction.input';
import { ARTICLE_REACTION_FRAGMENT, ArticleReactionFragment } from './article-reaction.fragment';

export const ARTICLE_REACTION_CREATE_MUTATION: any = gql`
  ${ARTICLE_REACTION_FRAGMENT}
  mutation($input: ArticleReactionCreateInput) {
    articleReactionCreate(input: $input) {
      ...ArticleReactionFragment
    }
  }
`

export interface ArticleReactionCreateResponse {
  articleReaction: ArticleReactionFragment;
}

export interface ArticleReactionCreateVariables {
  input: ArticleReactionCreateInput;
}