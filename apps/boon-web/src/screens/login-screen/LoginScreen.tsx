import gql from 'graphql-tag';
import {useRunQuery} from '../../graphql/run-query';
import {useRunMutation} from '../../graphql/run-mutation';
import {configContext} from '../../context/config/ConfigContext';
import {SessionCreatedWire, UserWire} from '@imagine-cms/types';
import {setGraphqlAccessToken} from '../../graphql/graphql.client';
import {GuestGuard} from '../../components/guest-guard/GuestGuard';
import React, {SyntheticEvent, useContext, useEffect, useState} from 'react';
import {LatestArticleCard} from '../../components/latest-article-card/LatestArticleCard';
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

export function LoginScreen() {
  const {config} = useContext(configContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const loginWithUsernameAndPassword = useRunMutation<{sessionCreate: SessionCreatedWire}>(LOGIN_WITH_USERNAME_AND_PASSWORD, { username, password })
  const fetchUserBySessionID = useRunQuery<UserWire>(FIND_USER_BY_ID, { userID: loginWithUsernameAndPassword?.data?.sessionCreate?.userID })

  console.log(config?.discordWidget);

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

  return (
    <GuestGuard>
      <main className="position-relative container justify-content-center py-4">
        <div className="row justify-content-center">
          <div className="col-lg-11 mb-4">
            <div className="w-full d-flex align-items-center justify-content-center flex-column rounded-lg py-4 px-4" style={{background: 'url(https://cdn.discordapp.com/attachments/361693054744133642/977198815209730119/unknown.png) no-repeat center center / cover', boxShadow: 'inset 0 0 0 1000px rgba(0, 0, 0, .6)' }}>

              <h4 className="text-white mb-2">We're putting the weekly rare rotations in your hands!</h4>
              <p className="text-white mb-1">You can now vote for 5 items you'd like to see in the catalog for a week. <a
                href="https://www.habboon.pw/voting/rare-rotations" className="font-weight-bolder">Click here</a> to get
                involved.</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-3 d-lg-block d-none">
            <LatestArticleCard />
          </div>
          <div className="col-lg-4 col-12">
            <div className="card">
              <div className="card-body">
                <h5 className="silver">Login to Habboon!</h5>
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
              </div>
            </div>
          </div>
          <div className="col-lg-4 d-lg-block d-none">
            {
              config?.discordWidget && (
                <div dangerouslySetInnerHTML={{ __html: config.discordWidget }} />
              )
            }
          </div>
        </div>
      </main>
    </GuestGuard>
  )
}
