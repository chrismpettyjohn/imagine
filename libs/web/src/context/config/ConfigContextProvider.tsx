import { ConfigWire } from '@imagine-cms/types';
import { configContext } from './ConfigContext';
import React, { useEffect, useState } from 'react';
import { useFetchConfig } from '../../hooks/fetch-config.hook';
import { ConfigContextProviderProps } from './ConfigContext.types';

export function ConfigContextProvider({ children, loadingScreen }: ConfigContextProviderProps) {
  const [config, setConfig] = useState<ConfigWire>();
  const { runQuery, data, loading } = useFetchConfig();

  useEffect(() => {
    runQuery();
  }, [runQuery]);

  useEffect(() => {
    setConfig(data?.config);
  }, [data]);

  const updateConfig = (changes: Partial<ConfigWire>) => {
    setConfig(_ => ({ ..._!, ...changes }));
  };

  if (loading) {
    return <>{loadingScreen}</>
  }

  return <configContext.Provider value={{ config, setConfig: updateConfig as any }}>{children}</configContext.Provider>;
}
