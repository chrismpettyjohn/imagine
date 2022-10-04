import gql from 'graphql-tag';
import {ArticleCreateInputDTO, ArticleWire} from '@imagine-cms/types';
import {useRunMutation, UseMutationResponse} from './run-mutation.hook';

const CREATE_ARTICLE = gql`
    mutation($articleCreateInput: ArticleCreateInput!) {
        articleCreate(newArticle: $articleCreateInput) {
            id,
            name,
            description,
            content,
            imageURL,
            userID,
        }
    }
`

export function useArticleCreate(articleCreateInput: ArticleCreateInputDTO): UseMutationResponse<{article: ArticleWire}> {
  return useRunMutation(CREATE_ARTICLE, {articleCreateInput})
}
