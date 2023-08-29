import { ReactNode } from 'react';
import { GraphQLClient } from '../../app/graphql.client';

export interface GraphQLContext {
  graphQLClient: GraphQLClient;
  setGraphQLAccessToken(newAccessToken: string): void;
}

export const defaultGraphQLContext: GraphQLContext = {
  graphQLClient: undefined as any,
  setGraphQLAccessToken(newAccessToken: string) { }
};

export interface GraphQLContextProviderProps {
  children: ReactNode;
}
