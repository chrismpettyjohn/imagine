import { graphQLContext } from './GraphQLContext';
import React, { useEffect, useState } from 'react';
import { ApolloProvider } from "@apollo/react-hooks";
import { useIPAddress } from '../../hooks/ip-address.hook';
import { generateGraphQLClient } from '../../app/graphql.client';
import { GraphQLContextProviderProps } from './GraphQLContext.types';

export function GraphQLContextProvider({ children, loadingScreen }: GraphQLContextProviderProps) {
  const { ipAddress } = useIPAddress();
  const [graphQLClient, setGraphQlClient] = useState<any | undefined>(undefined);

  const onRefreshClient = () => {
    const newGraphQLClient = generateGraphQLClient(ipAddress);
    setGraphQlClient(newGraphQLClient);
  }

  useEffect(() => {
    if (graphQLClient) {
      return;
    }
    if (!ipAddress) {
      return;
    }
    onRefreshClient();
  }, [graphQLClient, ipAddress]);

  if (!graphQLClient) {
    return (
      <>{loadingScreen}</>
    )
  }

  return (
    <ApolloProvider client={graphQLClient}>
      <graphQLContext.Provider value={{ graphQLClient, refreshClient: onRefreshClient }}>
        {children}
      </graphQLContext.Provider>
    </ApolloProvider>
  );
}
