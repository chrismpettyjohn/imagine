import gql from 'graphql-tag';
import {useRunMutation, UseMutationResponse} from './run-mutation.hook';

const DELETE_ARTICLE = gql`
    mutation($articleID: Float!) {
        articleDelete(id: $articleID)
    }
`

export function useArticleDelete(articleID: number): UseMutationResponse<boolean> {
  return useRunMutation(DELETE_ARTICLE, {articleID})
}
