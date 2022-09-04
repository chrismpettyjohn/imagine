import gql from 'graphql-tag';
import {ArticleCommentWire} from '@imagine-cms/types';
import {UseQueryResponse, useRunQuery} from './run-query.hook';

const FETCH_ARTICLE_COMMENTS_BY_ARTICLE_ID = gql`
    query($articleID: Float!) {
        articleComments(articleID: $articleID) {
            id,
            userID,
            articleID,
            comment,
            createdAt,
            updatedAt,
            user {
                id,
                look,
                username,
            }
        }
    }
`;

export const useArticleCommentsFetchByArticleID = (articleID: number): UseQueryResponse<{articleComments: ArticleCommentWire[]}> => {
  return useRunQuery(FETCH_ARTICLE_COMMENTS_BY_ARTICLE_ID, { articleID });
};
