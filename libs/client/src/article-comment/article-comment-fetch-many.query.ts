import gql from 'graphql-tag';
import { ArticleCommentFilterManyInput } from './article-comment.input';
import { ARTICLE_COMMENT_FRAGMENT, ArticleCommentFragment } from "./article-comment.fragment";

export const ARTICLE_COMMENT_FETCH_MANY_QUERY: any = gql`
  ${ARTICLE_COMMENT_FRAGMENT}
  query($filter: ArticleCommentFilterManyInput!) {
    articleComments(filter: $filter) {
      ...ArticleCommentFragment
    }
  }
`
export interface ArticleCommentFetchManyQueryResponse {
  articleComments: ArticleCommentFragment[];
}

export interface ArticleCommentFetchManyQueryVariables {
  filter: ArticleCommentFilterManyInput;
}