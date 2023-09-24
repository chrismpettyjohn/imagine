import { ReactNode } from 'react';
import { ConfigWire } from '@imagine-cms/types';

export interface ConfigContext {
  config?: ConfigWire;
  setConfig(updatedConfigWire?: ConfigWire): void;
}

export const defaultConfigContext: ConfigContext = {
  config: undefined,
  setConfig(updatedConfigWire?: ConfigWire) { },
};

export interface ConfigContextProviderProps {
  children: ReactNode;
  loadingScreen: ReactNode;
}
