import gql from 'graphql-tag';
import {useRunMutation, UseMutationResponse} from './run-mutation.hook';
import {ArticleCommentCreateInputDTO, ArticleCommentWire} from '@imagine-cms/types';

const CREATE_ARTICLE_COMMENT = gql`
    mutation($articleCommentCreateInput: ArticleCommentCreateInput!) {
        articleCommentCreate(newArticleComment: $articleCommentCreateInput) {
            id,
            userID,
            articleID,
            comment,
            createdAt,
            updatedAt,
        }
    }
`

export function useArticleCommentCreate(articleCommentCreateInput: ArticleCommentCreateInputDTO): UseMutationResponse<{newComment: ArticleCommentWire}> {
  return useRunMutation(CREATE_ARTICLE_COMMENT, {articleCommentCreateInput})
}
