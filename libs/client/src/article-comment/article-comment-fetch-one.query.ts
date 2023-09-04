import gql from 'graphql-tag';
import { ArticleCommentFilterOneInput } from './article-comment.input';
import { ARTICLE_COMMENT_FRAGMENT, ArticleCommentFragment } from './article-comment.fragment';

export const ARTICLE_COMMENT_FETCH_ONE_QUERY: any = gql`
  ${ARTICLE_COMMENT_FRAGMENT}
  query($filter: ArticleCommentFilterOneInput!) {
    articleComment(filter: $filter) {
      ...ArticleCommentFragment
    }
  }
`

export interface ArticleCommentFetchOneResponse {
  articleComment: ArticleCommentFragment;
}

export interface ArticleCommentFetchOneVariables {
  filter: ArticleCommentFilterOneInput;
}