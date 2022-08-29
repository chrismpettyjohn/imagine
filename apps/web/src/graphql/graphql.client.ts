import ApolloClient from "apollo-client";
import {GRAPHQL_URL} from '../app.constant';
import { WebSocketLink } from "apollo-link-ws";
import { InMemoryCache } from "apollo-cache-inmemory";

let graphqlAccessToken = '';

export const graphqlClient = new ApolloClient({
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
}
