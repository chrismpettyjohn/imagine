import gql from 'graphql-tag';
import { ArticleFilterOneInput } from './article.input';
import { ARTICLE_FRAGMENT, ArticleFragment } from './article.fragment';

export const ARTICLE_FETCH_ONE_QUERY: any = gql`
  ${ARTICLE_FRAGMENT}
  query($filter: ArticleFilterOneInput!) {
    article(filter: $filter) {
      ...ArticleFragment
    }
  }
`

export interface ArticleFetchOneQueryVariables {
  filter: ArticleFilterOneInput;
}

export interface ArticleFetchOneQueryResponse {
  article: ArticleFragment;
}