import { UserWire } from '@imagine-cms/types';
import { sessionContext } from './SessionContext';
import React, { useEffect, useState } from 'react';
import { useUserFetchOne } from '@imagine-cms/client';
import { SessionContextProviderProps } from './SessionContext.types';
import { localStorageService } from '../../service/local-storage.service';
import { useFetchSessionByJwt } from '../../hooks/fetch-session-by-jwt.hook';

export function SessionContextProvider({ children, loadingScreen }: SessionContextProviderProps) {
  const existingJwt = localStorageService.get('SESSION', true);
  const [loading, setIsLoading] = useState(true);
  const [session, _setSessionState] = useState<any>();
  const fetchSessionByJwt = useFetchSessionByJwt(existingJwt ?? '');
  const fetchUser = useUserFetchOne();

  useEffect(() => {
    const checkForPreviousSession = async () => {
      if (!existingJwt) {
        setIsLoading(false);
        return;
      }

      fetchSessionByJwt.runQuery();
    };

    checkForPreviousSession();
  }, []);

  useEffect(() => {
    if (fetchSessionByJwt.error) {
      setIsLoading(false);
      return;
    }

    if (fetchSessionByJwt.data?.sessionByJWT?.userID) {
      fetchUser.fetch({ id: fetchSessionByJwt.data.sessionByJWT.userID })
    }

  }, [fetchSessionByJwt?.data, fetchSessionByJwt?.error]);

  useEffect(() => {
    if (fetchUser?.data) {
      _setSession(fetchUser.data);
      setIsLoading(false);
    }
  }, [fetchUser?.data]);

  const _setSession = (newSession?: any) => {
    _setSessionState(newSession);
  };

  const setSession = (updates: Partial<UserWire>) => {
    _setSessionState((_: any) => ({
      ..._,
      ...updates,
    }))
  }

  if (loading) {
    return loadingScreen;
  }

  return <sessionContext.Provider value={{ session, _setSession, setSession }}>{children}</sessionContext.Provider>;
}
