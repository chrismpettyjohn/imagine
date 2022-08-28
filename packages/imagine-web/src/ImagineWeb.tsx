import React from 'react';
import {ApolloProvider} from '@apollo/client';
import {Router} from './component/router/Router';
import {apolloClient} from './utility/apollo.client';
import {SessionContextProvider} from './context/session/SessionContextProvider';

export function ImagineWeb() {
  return (
    <ApolloProvider client={apolloClient}>
      <SessionContextProvider>
        <Router />
      </SessionContextProvider>
    </ApolloProvider>
  );
}
