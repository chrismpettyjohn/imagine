import {GRAPHQL_URL} from './app.constant';
import {WebSocketLink} from 'apollo-link-ws';
import {ApolloClient, InMemoryCache} from '@apollo/client';

let graphqlAccessToken = '';

export type GraphQLClient = ApolloClient<any>;

export const generateGraphQLClient = (graphqlAccessToken?: string): GraphQLClient => {
  return new ApolloClient({
    // @ts-ignore
    link: new WebSocketLink({
      uri: GRAPHQL_URL,
      options: {
        reconnect: true,
        connectionParams: {
          headers: {
            Authorization: `Bearer ${graphqlAccessToken}`,
          },
        },
      },
    }),
    cache: new InMemoryCache(),
  });
}

export const graphqlClient = new ApolloClient({
  // @ts-ignore
  link: new WebSocketLink({
    uri: GRAPHQL_URL,
    options: {
      reconnect: true,
      connectionParams: {
        headers: {
          Authorization: `Bearer ${graphqlAccessToken}`,
        },
      },
    },
  }),
  cache: new InMemoryCache(),
});

export const setGraphqlAccessToken = (accessToken: string) => {
  graphqlAccessToken = accessToken;
};
