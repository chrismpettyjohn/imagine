import {sessionContext} from './SessionContext';
import React, {useEffect, useState} from 'react';
import {SessionContextProviderProps} from './SessionContext.types';
import {setGraphqlAccessToken} from '../../graphql/graphql.client';
import {localStorageService} from '../../utility/local-storage.service';

export function SessionContextProvider({
  children,
}: SessionContextProviderProps) {
  const [loading, setIsLoading] = useState(true);
  const [session, setSessionState] = useState<any>();

  useEffect(() => {
    const checkForPreviousSession = async () => {
      const userAlreadyLoggedIn = localStorageService.exists('SESSION');

      if (userAlreadyLoggedIn) {
        const jwt = localStorageService.get('SESSION');
        try {
          setGraphqlAccessToken(jwt);
          // TODO Implement auto reusing session
          setIsLoading(false);
        } catch {
          // Do nothing
        }
      }

      setIsLoading(false);
    };

    checkForPreviousSession();
  }, []);

  const setSession = (newSession?: any) => {
    setSessionState(newSession);
  };

  return (
    <sessionContext.Provider value={{session, setSession}}>
      {loading ? '' : children}
    </sessionContext.Provider>
  );
}
