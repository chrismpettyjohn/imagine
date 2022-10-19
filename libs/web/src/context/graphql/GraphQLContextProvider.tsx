import React, {useState} from 'react';
import {graphQLContext} from './GraphQLContext';
import { ApolloProvider } from "@apollo/react-hooks";
import {GraphQLContextProviderProps} from './GraphQLContext.types';
import {generateGraphQLClient, graphqlClient, GraphQLClient} from '@imagine-cms/web';

export function GraphQLContextProvider({children}: GraphQLContextProviderProps) {
  const [graphQLClient, setGraphQLClient] = useState<GraphQLClient>(generateGraphQLClient());

  const setGraphQLAccessToken = (newAccessToken: string) => {
    setGraphQLClient(generateGraphQLClient(newAccessToken));
  }

  return (
    <graphQLContext.Provider value={{graphQLClient, setGraphQLAccessToken}}>
      <ApolloProvider client={graphqlClient as any}>
        {children}
      </ApolloProvider>
    </graphQLContext.Provider>
  );
}
