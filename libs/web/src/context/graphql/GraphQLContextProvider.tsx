import React, { useState } from 'react';
import { graphQLContext } from './GraphQLContext';
import { ApolloProvider } from "@apollo/react-hooks";
import { GraphQLContextProviderProps } from './GraphQLContext.types';
import { generateGraphQLClient, graphqlClient, GraphQLClient } from '../../app/graphql.client';

export function GraphQLContextProvider({ children }: GraphQLContextProviderProps) {
  const [graphQLClient, setGraphQLClient] = useState<GraphQLClient>(generateGraphQLClient());

  const setGraphQLAccessToken = (newAccessToken: string) => {
    setGraphQLClient(generateGraphQLClient(newAccessToken));
  }

  return (
    <ApolloProvider client={graphqlClient as any}>
      <graphQLContext.Provider value={{ graphQLClient, setGraphQLAccessToken }}>
        {children}
      </graphQLContext.Provider>
    </ApolloProvider>
  );
}
