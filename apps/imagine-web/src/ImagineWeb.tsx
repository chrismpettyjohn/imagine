import React from 'react';
import {Router} from './screens/Router';
import {ToastContainer} from 'react-toastify';
import { ApolloProvider } from "@apollo/react-hooks";
import {ConfigContextProvider, SessionContextProvider, graphqlClient} from '@imagine-cms/web';

export function ImagineWeb() {
  return (
    <ApolloProvider client={graphqlClient as any}>
      <ConfigContextProvider>
        <SessionContextProvider>
          <ToastContainer />
          <Router />
        </SessionContextProvider>
      </ConfigContextProvider>
    </ApolloProvider>
  )
}
