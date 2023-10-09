import { ReactNode } from 'react';
import { GraphQLClient } from '../../app/graphql.client';

export interface GraphQLContext {
  graphQLClient: GraphQLClient;
  refreshClient(): void;
}

export const defaultGraphQLContext: GraphQLContext = {
  graphQLClient: undefined as any,
  refreshClient() { },
};

export interface GraphQLContextProviderProps {
  children: ReactNode;
  loadingScreen: ReactNode;
}
