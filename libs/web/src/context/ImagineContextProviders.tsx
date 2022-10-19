import React from 'react';
import {ImagineContextProvidersProps} from './ImagineContextProviders.types';
import {
  ConfigContextProvider,
  GraphQLContextProvider,
  SessionContextProvider,
  ThemeContextProvider
} from '@imagine-cms/web';

export function ImagineContextProviders({children}: ImagineContextProvidersProps) {
  return (
    <GraphQLContextProvider>
      <ConfigContextProvider>
        <SessionContextProvider>
          <ThemeContextProvider>
            {children}
          </ThemeContextProvider>
        </SessionContextProvider>
      </ConfigContextProvider>
    </GraphQLContextProvider>
  )
}
