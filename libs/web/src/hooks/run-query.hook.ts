import {DocumentNode} from 'graphql';
import {useLazyQuery} from '@apollo/react-hooks';

export interface UseQueryResponse<Response> {
  runQuery(): void;
  loading: boolean;
  error?: any;
  data?: Response;
}

export function useRunQuery<Response>(query: DocumentNode, variables?: object): UseQueryResponse<Response> {
  const [runQuery, {loading, error, data}] = useLazyQuery(query, {variables});
  return {
    runQuery,
    loading,
    error,
    data,
  };
}
