import gql from 'graphql-tag';
import {useRunMutation, UseMutationResponse} from '@imagine-cms/web';
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

export function useCreateWordFilter(wordFilterCreateInput: WordFilterCreateInputDTO): UseMutationResponse<WordFilterWire> {
    console.log(wordFilterCreateInput);
  return useRunMutation(CREATE_WORD_FILTER, {wordFilterCreateInput})
}
