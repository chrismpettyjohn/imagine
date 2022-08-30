import React, {useState} from 'react';
import {UserWire} from '@imagine-cms/types';
import {sessionContext} from './SessionContext';
import {SessionContextProviderProps} from './SessionContext.types';

export function SessionContextProvider({
  children,
}: SessionContextProviderProps) {
  const [session, setSessionState] = useState<any>();

  console.log(session);

  const setSession = (newSession?: UserWire) => {
    setSessionState(newSession);
  };

  return (
    <sessionContext.Provider value={{session, setSession}}>
      {children}
    </sessionContext.Provider>
  );
}
