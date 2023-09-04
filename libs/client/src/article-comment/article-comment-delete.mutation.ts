import gql from 'graphql-tag';
import { ArticleCommentDeleteInput } from './article-comment.input';

export const ARTICLE_COMMENT_DELETE_MUTATION: any = gql`
  mutation($input: ArticleCommentDeleteInput) {
    articleCommentDelete(input: $input)
  }
`

export interface ArticleCommentDeleteResponse {
  data: boolean;
}

export interface ArticleCommentDeleteVariables {
  input: ArticleCommentDeleteInput;
}