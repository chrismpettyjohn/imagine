import gql from 'graphql-tag';
import { ArticleReactionDeleteInput } from './article-reaction.input';

export const ARTICLE_REACTION_DELETE_MUTATION: any = gql`
  mutation($input: ArticleReactionDeleteInput) {
    articleReactionDelete(input: $input)
  }
`

export interface ArticleReactionDeleteResponse {
  data: boolean;
}

export interface ArticleReactionDeleteVariables {
  input: ArticleReactionDeleteInput;
}