import React from 'react';
import { graphQLContext } from './GraphQLContext';
import { ApolloProvider } from "@apollo/react-hooks";
import { graphQLClient } from '../../app/graphql.client';
import { GraphQLContextProviderProps } from './GraphQLContext.types';

export function GraphQLContextProvider({ children }: GraphQLContextProviderProps) {
  return (
    <ApolloProvider client={graphQLClient}>
      <graphQLContext.Provider value={{ graphQLClient }}>
        {children}
      </graphQLContext.Provider>
    </ApolloProvider>
  );
}
