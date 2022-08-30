import gql from 'graphql-tag';
import {useNavigate} from 'react-router-dom';
import {useRunQuery} from '../../graphql/run-query';
import {useRunMutation} from '../../graphql/run-mutation'
import {SessionCreatedWire, UserWire} from '@imagine-cms/types';
import {LoadingOverlay} from '../loading-overlay/LoadingOverlay';
import {setGraphqlAccessToken} from '../../graphql/graphql.client';
import {sessionContext} from '../../context/session/SessionContext';
import React, {SyntheticEvent, useContext, useEffect, useState} from 'react';
import {UsernameWithAvatarInput} from './username-with-avatar-input/UsernameWithAvatarInput';

const LOGIN_WITH_USERNAME_AND_PASSWORD = gql`
    mutation($username: String!, $password: String!) {
        sessionCreate(sessionCreateInput: { username: $username, password: $password }) {
            id,
            userID,
            accessToken
        }
    }
`

const FIND_USER_BY_ID = gql`
    query($userID: Float!) {
        user(id: $userID) {
            id,
            username,
            email,
            rankID,
            rankVipID,
            credits,
            vipPoints,
            activityPoints,
            look,
            gender,
            motto,
            accountCreatedAt,
            lastOnline,
            onlineStatus,
            ipRegisteredWith,
            homeRoomID,
            muteStatus,
            allowingNewFriends,
            showOnlineStatus,
            vipStatus,
        }
    }
`

export function LoginForm() {
  const navigate = useNavigate();
  const {setSession} = useContext(sessionContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const loginWithUsernameAndPassword = useRunMutation<{sessionCreate: SessionCreatedWire}>(LOGIN_WITH_USERNAME_AND_PASSWORD, { username, password })
  const fetchUserBySessionID = useRunQuery<UserWire>(FIND_USER_BY_ID, { userID: loginWithUsernameAndPassword?.data?.sessionCreate?.userID })

  const isLoading = loginWithUsernameAndPassword.loading || fetchUserBySessionID.loading;

  const onLogin = async (event?: SyntheticEvent) => {
    event?.preventDefault();
    loginWithUsernameAndPassword.runQuery();
  }

  useEffect(() => {
    if (loginWithUsernameAndPassword.data) {
      setGraphqlAccessToken(loginWithUsernameAndPassword.data.sessionCreate.accessToken!);
      fetchUserBySessionID.runQuery();
    }
  }, [loginWithUsernameAndPassword.data]);

  useEffect(() => {
    setSession(fetchUserBySessionID.data);
    navigate('/me');
  }, [fetchUserBySessionID.data]);

  return (
    <LoadingOverlay loading={isLoading}>
      <form className="form" onSubmit={onLogin}>
        <UsernameWithAvatarInput username={username} onChange={setUsername} />
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" className="form-control" id="password" placeholder="Password" autoComplete="current-password" required value={password} onChange={(e: any) => setPassword(e?.currentTarget?.value ?? '')} />
        </div>
        <p><small><a href="https://www.habboon.pw/password/reset" aria-label="Forgot your password?">Forgot
          your password?</a></small></p>
        <div className="form-group mb-0">
          <button className="btn btn-primary btn-block" type="submit">Login</button>
        </div>
      </form>
    </LoadingOverlay>
  )
}
