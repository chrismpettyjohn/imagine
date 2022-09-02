import gql from 'graphql-tag';
import {ArticleWire} from '@imagine-cms/types';
import {UseQueryResponse, useRunQuery} from '../graphql/run-query';

const FETCH_LATEST_ARTICLES = gql`
    query($limit: Int!) {
        articles(other: { take: $limit, order: { id: "DESC" } }) {
            id,
            name,
            description,
            content,
            imageURL,
            user {
                id,
                username,
                look,
            },
        }
    }
`

export const useFetchLatestArticles = (limit = 6): UseQueryResponse<{articles: ArticleWire[]}> => {
  return useRunQuery(FETCH_LATEST_ARTICLES, { limit });
}
