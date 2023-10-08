import { GRAPHQL_URL } from './app.constant';
import { WebSocketLink } from 'apollo-link-ws';
import { ApolloClient, InMemoryCache } from '@apollo/client';

export type GraphQLClient = ApolloClient<any>;

export function generateGraphQLClient(userIPAddress: string): ApolloClient<any> {
  return new ApolloClient({
    link: new WebSocketLink({
      lazy: true,
      uri: GRAPHQL_URL,
      options: {
        reconnect: true,
        connectionParams: () => {
          const accessToken = localStorage.getItem('SESSION');
          return {
            Authorization: `Bearer ${accessToken}`,
            'X-Forwarded-For': userIPAddress,
          }
        },
      },
    }) as any,
    cache: new InMemoryCache(),
  });
}