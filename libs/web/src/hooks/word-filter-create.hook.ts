import gql from 'graphql-tag';
import {useRunMutation, UseMutationResponse} from './run-mutation.hook';
import {WordFilterCreateInputDTO, WordFilterWire} from '@imagine-cms/types';

const CREATE_WORD_FILTER = gql`
    mutation($wordFilterCreateInput: WordFilterCreateInput!) {
        wordFilterCreate(newWordFilter: $wordFilterCreateInput) {
            id,
            word,
            replacement,
            strict,
            bannable,
            addedByUserID
        }
    }
`

export function useWordFilterCreate(wordFilterCreateInput: WordFilterCreateInputDTO): UseMutationResponse<WordFilterWire> {
  return useRunMutation(CREATE_WORD_FILTER, {wordFilterCreateInput})
}
