import gql from 'graphql-tag';
import { ArticleCommentFilterOneInput, ArticleCommentUpdateInput } from './article-comment.input';
import { ARTICLE_COMMENT_FRAGMENT, ArticleCommentFragment } from './article-comment.fragment';

export const ARTICLE_COMMENT_UPDATE_MUTATION: any = gql`
  ${ARTICLE_COMMENT_FRAGMENT}
  mutation($filter: ArticleCommentFilterOneInput!, $input: ArticleCommentUpdateInput!) {
    articleCommentUpdate(filter: $filter, input: $input) {
      ...ArticleCommentFragment
    }
  }
`

export interface ArticleCommentUpdateResponse {
  articleComment: ArticleCommentFragment;
}

export interface ArticleCommentUpdateVariables {
  filter: ArticleCommentFilterOneInput;
  input: ArticleCommentUpdateInput;
}