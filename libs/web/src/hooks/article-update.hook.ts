import gql from 'graphql-tag';
import {ArticleUpdateInputDTO} from '@imagine-cms/types';
import {useRunMutation, UseMutationResponse} from './run-mutation.hook';

const UPDATE_ARTICLE = gql`
    mutation($articleID: Float!, $articleChanges: ArticleUpdateInput!) {
        articleUpdate(id: $articleID, articleChanges: $articleChanges)
    }
`

export function useArticleUpdate(articleID: number, articleChanges: ArticleUpdateInputDTO): UseMutationResponse<boolean> {
  return useRunMutation(UPDATE_ARTICLE, {articleID, articleChanges})
}
