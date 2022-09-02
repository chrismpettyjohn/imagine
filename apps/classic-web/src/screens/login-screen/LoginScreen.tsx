import gql from 'graphql-tag';
import {useLocation} from 'wouter';
import {useRunQuery} from '../../graphql/run-query';
import {useRunMutation} from '../../graphql/run-mutation';
import {SessionCreatedWire, UserWire} from '@imagine-cms/types';
import {setGraphqlAccessToken} from '../../graphql/graphql.client';
import {sessionContext} from '../../context/session/SessionContext';
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
  const [location, setLocation] = useLocation();
  const {setSession} = useContext(sessionContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const loginWithUsernameAndPassword = useRunMutation<{sessionCreate: SessionCreatedWire}>(LOGIN_WITH_USERNAME_AND_PASSWORD, { username, password })
  const fetchUserBySessionID = useRunQuery<UserWire>(FIND_USER_BY_ID, { userID: loginWithUsernameAndPassword?.data?.sessionCreate?.userID })

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
    if (fetchUserBySessionID?.data) {
      setSession(fetchUserBySessionID.data);
      setLocation('/me');
    }
  }, [fetchUserBySessionID.data]);

  return (
    <body id="landing" className="process-template" data-new-gr-c-s-check-loaded="14.1077.0" data-gr-ext-installed="">
    <div id="overlay"></div>
    <div id="container">
      <div className="cb process-template-box clearfix">
        <div className="bt">
          <div></div>
        </div>
        <div className="i1">
          <div className="i2">
            <div className="i3">
              <div id="content">
                <div id="header" className="clearfix">
                  <h1><a href="/"></a></h1>
                  <ul className="stats">
                    <li className="stats-online"><span className="stats-fig">12</span> Habbos online now!</li>
                    <li className="stats-visited"><span className="stats-fig">608 </span> visits in the last 30 days
                    </li>
                  </ul>
                </div>
                <div id="process-content">
                  <div id="column1" className="column">

                    <div className="habblet-container " id="create-habbo">
                      <div id="create-habbo" className="layout-static">
                        <div id="create-habbo-nonflash" style={{backgroundImage: 'url(https://cdn.classichabbo.com/web-gallery/v2/images/landing/pixel.gif)'}}  />
                          <div className="landing-text-1"><span>Virtual world, real fun</span></div>
                          <div className="landing-text-2"><span>Create your Habbo...</span></div>
                          <div className="landing-text-3"><span>...and make new friends :)</span></div>
                          <div id="landing-register-text"><a href="https://classichabbo.com/register"><span>Join now, it's free »</span></a>
                          </div>
                          <div id="landing-promotional-text"><span>Habbo is a virtual world where you can meet and make friends.</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="column2" className="column">
                  <div className="habblet-container ">
                    <div className="cb loginbox clearfix">
                      <div className="bt">
                        <div />
                      </div>
                      <div className="i1">
                        <div className="i2">
                          <div className="i3">
                            <div className="rounded-container">
                              </div>
                              <h2 className="title rounded-done">Sign in</h2>
                              </div>
                            </div>
                            <div className="box-content clearfix" id="login-habblet">
                              <form action="https://classichabbo.com/account/submit" method="post"
                                    className="login-habblet" data-bitwarden-watching="1">
                                <ul>
                                  <li>
                                    <label htmlFor="login-username" className="login-text">Username</label>
                                    <input tabIndex={1} type="text" className="login-field" name="username"
                                           id="login-username" value="" />
                                  </li>
                                  <li>
                                    <label htmlFor="login-password" className="login-text">Password</label>
                                    <input tabIndex={2} type="password" className="login-field" name="password"
                                           id="login-password" />
                                      <input type="submit" value="Sign in" className="submit" id="login-submit-button" style={{marginLeft: -10000}} />
                                        <a href="#" id="login-submit-new-button" className="new-button" style={{float: 'left', marginLeft: 0}}><b  style={{paddingLeft: 10, paddingRight: 7,  width: 55}}>Sign in</b><i></i></a>
                                  </li>
                                  <li className="no-label">
                                    <input tabIndex={3} type="checkbox" value="true" name="_login_remember_me"
                                           id="login-remember-me" />
                                      <label htmlFor="login-remember-me">Remember me</label>
                                  </li>
                                  <li className="no-label">
                                    <a href="https://classichabbo.com/register" className="login-register-link"><span>Register for free</span></a>
                                  </li>
                                  <li className="no-label">
                                    <a href="https://classichabbo.com/account/password/forgot"
                                       id="forgot-password"><span>I forgot my username/password</span></a>
                                  </li>
                                </ul>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bb">
                        <div></div>
                      </div>
                    </div>
                  </div>
                  <div className="habblet-container ">
                  </div>
                  <div className="habblet-container ">
                  </div>
                  <div className="habblet-container ">
                    <div className="ad-container">

                      <a href="https://classichabbo.com/games"><img src="https://i.imgur.com/ehgdoyS.png" alt="" /></a>
                    </div>
                  </div>
                <div id="column3" className="column">
                </div>
                <div id="column-footer">
                  <div id="footer">
                    <p><a href="https://classichabbo.com/" target="_self">Homepage</a> | <a
                      href="https://classichabbo.com/papers/disclaimer" target="_self">Disclaimer</a> | <a
                      href="https://classichabbo.com/papers/privacy" target="_self">Privacy Policy</a></p>
                    <p className="copyright">Powered by HavanaWeb © 2019 <a
                      href="https://alex-dev.org/">Quackster</a><br/>HABBO is a registered trademark of Sulake
                      Corporation. All rights reserved to their respective owner(s).</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bb">
          <div />
        </div>
    </body>
  )
}
