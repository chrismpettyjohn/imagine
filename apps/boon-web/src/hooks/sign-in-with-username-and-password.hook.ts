import {toast} from 'react-toastify';
import {useContext, useEffect} from 'react';
import {useFindUserByID} from './find-user-by-id.hook';
import {useSessionCreateMutation} from './session-create.hook';
import {setGraphqlAccessToken} from '../graphql/graphql.client';
import {sessionContext} from '../context/session/SessionContext';

export function useSignInWithUsernameAndPassword(username: string, password: string): { tryLogin(): void } {
  const {setSession} = useContext(sessionContext);
  const createSession = useSessionCreateMutation(username, password);
  const fetchUserBySessionID = useFindUserByID(createSession?.data?.sessionCreate?.userID ?? 0);

  useEffect(() => {
    if (createSession.data) {
      setGraphqlAccessToken(createSession.data.sessionCreate.accessToken!);
      fetchUserBySessionID.runQuery();
    }
  }, [createSession.data]);

  useEffect(() => {
    if (fetchUserBySessionID?.data?.user) {
      setSession(fetchUserBySessionID.data.user);
      toast.success(`Welcome back, ${fetchUserBySessionID.data.user.username}!`);
    }
  }, [fetchUserBySessionID.data]);

  return {
    tryLogin: () => {
      createSession.runMutation();
    }
  }
}
