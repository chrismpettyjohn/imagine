import { graphQLContext } from './GraphQLContext';
import React, { useEffect, useState } from 'react';
import { ApolloProvider } from "@apollo/react-hooks";
import { useIPAddress } from '../../hooks/ip-address.hook';
import { generateGraphQLClient } from '../../app/graphql.client';
import { GraphQLContextProviderProps } from './GraphQLContext.types';

export function GraphQLContextProvider({ children, loadingScreen }: GraphQLContextProviderProps) {
  const { ipAddress } = useIPAddress();
  const [graphQLClient, setGraphQlClient] = useState<any | undefined>(undefined);

  useEffect(() => {
    if (graphQLClient) {
      return;
    }
    if (!ipAddress) {
      return;
    }
    const newGraphQLClient = generateGraphQLClient(ipAddress);
    setGraphQlClient(newGraphQLClient);
  }, [graphQLClient, ipAddress]);

  if (!graphQLClient) {
    return (
      <>{loadingScreen}</>
    )
  }

  return (
    <ApolloProvider client={graphQLClient}>
      <graphQLContext.Provider value={{ graphQLClient }}>
        {children}
      </graphQLContext.Provider>
    </ApolloProvider>
  );
}
