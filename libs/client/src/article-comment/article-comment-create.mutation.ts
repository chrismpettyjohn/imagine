import gql from 'graphql-tag';
import { ArticleCommentCreateInput } from './article-comment.input';
import { ARTICLE_COMMENT_FRAGMENT, ArticleCommentFragment } from './article-comment.fragment';

export const ARTICLE_COMMENT_CREATE_MUTATION: any = gql`
  ${ARTICLE_COMMENT_FRAGMENT}
  mutation($input: ArticleCommentCreateInput!) {
    articleCommentCreate(input: $input) {
      ...ArticleCommentFragment
    }
  }
`

export interface ArticleCommentCreateResponse {
  articleComment: ArticleCommentFragment;
}

export interface ArticleCommentCreateVariables {
  input: ArticleCommentCreateInput;
}