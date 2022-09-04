import gql from 'graphql-tag';
import {useRunMutation, UseMutationResponse} from './run-mutation.hook';
import {WordFilterUpdateInputDTO, WordFilterWire} from '@imagine-cms/types';

const EDIT_WORD_FILTER = gql`
    mutation($wordFilterID: Float!, $wordFilterUpdateInput: WordFilterUpdateInput!) {
        wordFilterUpdate(id: $wordFilterID, wordFilterChanges: $wordFilterUpdateInput)
    }
`

export function useWordFilterUpdate(wordFilterID: number, wordFilterUpdateInput: WordFilterUpdateInputDTO): UseMutationResponse<WordFilterWire> {
  return useRunMutation(EDIT_WORD_FILTER, {wordFilterID, wordFilterUpdateInput})
}
