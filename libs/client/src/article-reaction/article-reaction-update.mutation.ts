import gql from 'graphql-tag';
import { ArticleReactionFilterOneInput, ArticleReactionUpdateInput } from './article-reaction.input';
import { ARTICLE_REACTION_FRAGMENT, ArticleReactionFragment } from './article-reaction.fragment';

export const ARTICLE_REACTION_UPDATE_MUTATION: any = gql`
  ${ARTICLE_REACTION_FRAGMENT}
  mutation($filter: ArticleReactionFilterOneInput!, $input: ArticleReactionUpdateInput!) {
    articleReactionUpdate(filter: $filter, input: $input) {
      ...ArticleReactionFragment
    }
  }
`

export interface ArticleReactionUpdateResponse {
  articleReaction: ArticleReactionFragment;
}

export interface ArticleReactionUpdateVariables {
  filter: ArticleReactionFilterOneInput;
  input: ArticleReactionUpdateInput;
}