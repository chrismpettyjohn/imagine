import gql from 'graphql-tag';
import { ArticleFilterManyInput } from './article.input';
import { ARTICLE_FRAGMENT, ArticleFragment } from './article.fragment';

export const ARTICLE_FETCH_MANY_QUERY: any = gql`
  ${ARTICLE_FRAGMENT}
  query($filter: ArticleFilterManyInput!) {
    articles(filter: $filter) {
      ...ArticleFragment
    }
  }
`

export interface ArticleFetchManyQueryVariables {
  filter: ArticleFilterManyInput;
}

export interface ArticleFetchManyQueryResponse {
  articles: ArticleFragment[];
}