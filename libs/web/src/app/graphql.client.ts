import {GRAPHQL_URL} from './app.constant';
import {WebSocketLink} from 'apollo-link-ws';
import {ApolloClient, InMemoryCache} from '@apollo/client';

let graphqlAccessToken = '';

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
