import {ConfigWire} from '@imagine-cms/types';
import {configContext} from './ConfigContext';
import React, {useEffect, useState} from 'react';
import {useFetchConfig} from '../../hooks/fetch-config.hook';
import {ConfigContextProviderProps} from './ConfigContext.types';
import {LoadingScreen} from '../../components/loading-screen/LoadingScreen';

export function ConfigContextProvider({children}: ConfigContextProviderProps) {
  const [config, setConfig] = useState<ConfigWire>();
  const {runQuery, data, loading} = useFetchConfig();

  useEffect(() => {
    runQuery();
  }, [runQuery]);

  useEffect(() => {
    setConfig(data?.config);
  }, [data]);

  const updateConfig = (changes: Partial<ConfigWire>) => {
    setConfig(_ => ({..._, ...changes}));
  };

  if (loading) {
    return <LoadingScreen />
  }

  return <configContext.Provider value={{config, setConfig: updateConfig}}>{children}</configContext.Provider>;
}
