import gql from 'graphql-tag';
import {ArticleWire} from '@imagine-cms/types';
import {UseQueryResponse, useRunQuery} from './run-query.hook';

const FETCH_LATEST_ARTICLE = gql`
  query {
    articles(other: {take: 1, order: {id: "DESC"}}) {
      id
      name
      description
      content
      imageURL
      user {
        id
        username
        look
      }
    }
  }
`;

export const useFetchLatestArticle = (): UseQueryResponse<{articles: [ArticleWire]}> => {
  return useRunQuery(FETCH_LATEST_ARTICLE);
};
