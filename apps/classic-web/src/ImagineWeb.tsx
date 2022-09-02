import React from 'react';
import {Router} from './screens/Router';
import { ApolloProvider } from "@apollo/react-hooks";
import {graphqlClient} from './graphql/graphql.client';
import {SessionContextProvider} from './context/session/SessionContextProvider';

export function ImagineWeb() {
  return (
    <ApolloProvider client={graphqlClient as any}>
      <SessionContextProvider>
        <Router />
      </SessionContextProvider>
    </ApolloProvider>
  )
}
