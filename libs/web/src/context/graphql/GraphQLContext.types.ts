import { ReactNode } from 'react';
import { GraphQLClient } from '../../app/graphql.client';

export interface GraphQLContext {
  graphQLClient: GraphQLClient;
}

export const defaultGraphQLContext: GraphQLContext = {
  graphQLClient: undefined as any,
};

export interface GraphQLContextProviderProps {
  children: ReactNode;
}
