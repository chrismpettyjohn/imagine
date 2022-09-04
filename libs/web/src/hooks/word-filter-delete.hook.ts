import gql from 'graphql-tag';
import {useRunMutation, UseMutationResponse} from './run-mutation.hook';

const DELETE_WORD_FILTER = gql`
    mutation($wordFilterID: Float!) {
        wordFilterDelete(id: $wordFilterID)
    }
`

export function useWordFilterDelete(wordFilterID: number): UseMutationResponse<boolean> {
  return useRunMutation(DELETE_WORD_FILTER, {wordFilterID})
}
