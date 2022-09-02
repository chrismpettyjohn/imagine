import {useLocation} from 'wouter';
import {sessionContext} from './SessionContext';
import React, {useEffect, useState} from 'react';
import {useFindUserByID} from '../../hooks/find-user-by-id.hook';
import {SessionContextProviderProps} from './SessionContext.types';
import {setGraphqlAccessToken} from '../../graphql/graphql.client';
import {localStorageService} from '../../utility/local-storage.service';
import {useFetchSessionByJwt} from '../../hooks/fetch-session-by-jwt.hook';

export function SessionContextProvider({
  children,
}: SessionContextProviderProps) {
  const [location, setLocation] = useLocation();
  const existingJwt = localStorageService.get('SESSION', true);
  const [loading, setIsLoading] = useState(true);
  const [session, setSessionState] = useState<any>();
  const fetchSessionByJwt = useFetchSessionByJwt(existingJwt ?? '');
  const fetchUserBySessionID = useFindUserByID(fetchSessionByJwt?.data?.sessionByJWT?.userID ?? 0)

  useEffect(() => {
    const checkForPreviousSession = async () => {
      if (!existingJwt) {
        setIsLoading(false);
        return;
      }

      setGraphqlAccessToken(existingJwt);
      fetchSessionByJwt.runQuery();
    };

    checkForPreviousSession();
  }, []);

  useEffect(() => {
    if (fetchSessionByJwt.error) {
      setIsLoading(false);
      return;
    }

    fetchUserBySessionID.runQuery();
  }, [fetchSessionByJwt?.data, fetchSessionByJwt?.error]);

  useEffect(() => {
    if (fetchUserBySessionID?.data?.user) {
      setSession(fetchUserBySessionID?.data?.user);
      setIsLoading(false);
      setLocation('/me');
    }
  }, [fetchUserBySessionID?.data?.user]);

  const setSession = (newSession?: any) => {
    setSessionState(newSession);
  };

  return (
    <sessionContext.Provider value={{session, setSession}}>
      {loading ? '' : children}
    </sessionContext.Provider>
  );
}
