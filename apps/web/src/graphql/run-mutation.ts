import { DocumentNode } from 'graphql';
import {useMutation} from '@apollo/react-hooks';

export interface UseMutationResponse<Response> {
  runQuery(): void;
  loading: boolean;
  error?: any;
  data?: Response;
}

export function useRunMutation<Response>(mutation:  DocumentNode, variables?: object): UseMutationResponse<Response>  {
  const  [runQuery, { loading, error, data }]  = useMutation(mutation, { variables });
  return {
    runQuery,
    loading,
    error,
    data,
  }
}
