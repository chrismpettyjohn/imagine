import gql from 'graphql-tag';
import {ArticleWire} from '@imagine-cms/types';
import {UseQueryResponse, useRunQuery} from './run-query.hook';

const FETCH_ARTICLES = gql`
    query ($skip: Float!, $limit: Float!) {
        articles(other: {skip: $skip, take: $limit, order: {id: "DESC"}}) {
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

export const useFetchArticles = (skip = 0, limit = 6): UseQueryResponse<{articles: ArticleWire[]}> => {
  return useRunQuery(FETCH_ARTICLES, {skip, limit});
};
