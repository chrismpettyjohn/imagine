import gql from 'graphql-tag';
import {WordFilterWire} from '@imagine-cms/types';
import {UseQueryResponse, useRunQuery} from './run-query.hook';

const FETCH_WORD_FILTER = gql`
    query {
        wordFilters(other: {order: {id: "DESC"}}) {
            id,
            word,
            replacement,
            strict,
            addedByUserID,
            bannable,
        }
    }
`;

export const useFetchWordFilter = (): UseQueryResponse<{wordFilters: WordFilterWire[]}> => {
  return useRunQuery(FETCH_WORD_FILTER);
};
