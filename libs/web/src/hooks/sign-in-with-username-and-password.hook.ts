import { useLocation } from 'wouter';
import { toast } from 'react-toastify';
import { useContext, useEffect } from 'react';
import { useUserFetchOne } from '@imagine-cms/client';
import { useSessionCreate } from './session-create.hook';
import { sessionContext } from '../context/session/SessionContext';
import { localStorageService } from '../service/local-storage.service';

export function useSignInWithUsernameAndPassword(username: string, password: string): { tryLogin(): void } {
  const [, setLocation] = useLocation();
  const { _setSession } = useContext(sessionContext);
  const createSession = useSessionCreate(username, password);
  const fetchUser = useUserFetchOne();

  useEffect(() => {
    if (createSession.data) {
      localStorageService.set('SESSION', createSession.data.sessionCreate.accessToken);
      fetchUser.fetch({ id: createSession.data.sessionCreate.userID })
    }
  }, [createSession.data?.sessionCreate]);

  useEffect(() => {
    if (fetchUser?.data) {
      _setSession(fetchUser.data as any);
      toast.success(`Welcome back, ${fetchUser.data.username}!`);
      setLocation('/me');
    }
  }, [fetchUser.data]);

  return {
    tryLogin: () => {
      createSession.runMutation();
    },
  };
}
