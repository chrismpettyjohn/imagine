import React from 'react';
import { ThemeContextProvider } from './theme/ThemeProvider';
import { ConfigContextProvider } from './config/ConfigContextProvider';
import { GraphQLContextProvider } from './graphql/GraphQLContextProvider';
import { SessionContextProvider } from './session/SessionContextProvider';
import { ImagineContextProvidersProps } from './ImagineContextProviders.types';

export function ImagineContextProviders({ children, loadingScreen }: ImagineContextProvidersProps) {
  return (
    <GraphQLContextProvider loadingScreen={loadingScreen}>
      <ConfigContextProvider loadingScreen={loadingScreen}>
        <SessionContextProvider loadingScreen={loadingScreen}>
          <ThemeContextProvider>
            {children}
          </ThemeContextProvider>
        </SessionContextProvider>
      </ConfigContextProvider>
    </GraphQLContextProvider>
  )
}
