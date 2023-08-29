import {DocumentNode} from 'graphql';
import {useMutation} from '@apollo/react-hooks';

export interface UseMutationResponse<Response> {
  runMutation(): void;
  loading: boolean;
  error?: any;
  data?: Response;
}

export function useRunMutation<Response>(mutation: DocumentNode, variables?: object): UseMutationResponse<Response> {
  const [runMutation, {loading, error, data}] = useMutation(mutation, {variables});
  return {
    runMutation: runMutation,
    loading,
    error,
    data,
  };
}
