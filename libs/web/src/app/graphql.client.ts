import { GRAPHQL_URL } from './app.constant';
import { WebSocketLink } from 'apollo-link-ws';
import { ApolloClient, InMemoryCache } from '@apollo/client';

export type GraphQLClient = ApolloClient<any>;

export const graphQLClient: any = new ApolloClient({
  link: new WebSocketLink({
    lazy: true,
    uri: GRAPHQL_URL,
    options: {
      reconnect: true,
      connectionParams: () => {
        const accessToken = localStorage.getItem('SESSION');
        return {
          headers: {

            Authorization: `Bearer ${accessToken}`,
          }
        }
      },
    },
  }) as any,
  cache: new InMemoryCache(),
});
