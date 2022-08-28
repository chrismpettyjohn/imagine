import {sessionContext} from './SessionContext';
import React, {useEffect, useState} from 'react';
import {SessionContextProviderProps} from './SessionContext.types';

export function SessionContextProvider({children}: SessionContextProviderProps) {
  const [session, setSessionState] = useState<any>();


  useEffect(() => {
    const checkForPreviousSession = async () => {

    };

    checkForPreviousSession();
  }, []);

  const setSession = (newSession?: any) => {
    setSessionState(newSession);
  };

  return <sessionContext.Provider value={{session, setSession}}>{children}</sessionContext.Provider>;
}
