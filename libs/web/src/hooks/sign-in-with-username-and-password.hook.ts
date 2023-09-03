import { useLocation } from 'wouter';
import { toast } from 'react-toastify';
import { useContext, useEffect } from 'react';
import { useFindUserByID } from './find-user-by-id.hook';
import { useSessionCreate } from './session-create.hook';
import { sessionContext } from '../context/session/SessionContext';
import { localStorageService } from '../service/local-storage.service';

export function useSignInWithUsernameAndPassword(username: string, password: string): { tryLogin(): void } {
  const [location, setLocation] = useLocation();
  const { setSession } = useContext(sessionContext);
  const createSession = useSessionCreate(username, password);
  const fetchUserBySessionID = useFindUserByID(createSession?.data?.sessionCreate?.userID ?? 0);

  useEffect(() => {
    if (createSession.data) {
      localStorageService.set('SESSION', createSession.data.sessionCreate.accessToken);
      fetchUserBySessionID.runQuery();
    }
  }, [createSession.data]);

  useEffect(() => {
    if (fetchUserBySessionID?.data?.user) {
      setSession(fetchUserBySessionID.data.user);
      toast.success(`Welcome back, ${fetchUserBySessionID.data.user.username}!`);
      setLocation('/me');
    }
  }, [fetchUserBySessionID.data]);

  return {
    tryLogin: () => {
      createSession.runMutation();
    },
  };
}
