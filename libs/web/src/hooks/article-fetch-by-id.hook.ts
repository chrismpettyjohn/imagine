import gql from 'graphql-tag';
import {ArticleWire} from '@imagine-cms/types';
import {UseQueryResponse, useRunQuery} from './run-query.hook';

const FETCH_ARTICLE_BY_ID = gql`
    query($articleID: Float!) {
        article(id: $articleID) {
            id
            name
            description
            content
            imageURL
            user {
                username
                look
            }
        }
    }
`;

export const useArticleFetchByID = (articleID: number): UseQueryResponse<{article: ArticleWire}> => {
  return useRunQuery(FETCH_ARTICLE_BY_ID, { articleID });
};
