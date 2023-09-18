import { useCallback } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';

export interface UseQueryResponse<Response> {
  runQuery(): Promise<Response>;
  loading: boolean;
  error?: any;
  data?: Response;
}

export function useRunQuery<Response>(query: any, variables?: object): UseQueryResponse<Response> {
  const [runQuery, { loading, error, data }] = useLazyQuery(query, { variables });

  const onRunQuery = useCallback(async (...options: any) => {
    const response = await runQuery(...options);
    return response.data;
  }, []);

  return {
    runQuery: onRunQuery,
    loading,
    error,
    data,
  };
}
