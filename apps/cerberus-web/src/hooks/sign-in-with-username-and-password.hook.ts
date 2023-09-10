import { useLocation } from 'wouter';
import { toast } from 'react-toastify';
import { useContext, useEffect } from 'react';
import { useUserFetchOne } from '@imagine-cms/client';
import { localStorageService, sessionContext, useSessionCreate } from '@imagine-cms/web';

export function useSignInWithUsernameAndPassword(username: string, password: string): { tryLogin(): void } {
  const [, setLocation] = useLocation();
  const { setSession } = useContext(sessionContext);
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
      if (!fetchUser.data.rank.showStaff) {
        toast.error('This area is only for members of our staff team')
        localStorageService.delete('SESSION');
        return;
      }
      setSession(fetchUser.data as any);
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
