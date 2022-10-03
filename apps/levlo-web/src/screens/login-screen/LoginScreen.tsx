import './LoginScreen.css';
import {Link} from 'wouter';
import {toast} from 'react-toastify';
import React, {SyntheticEvent, useContext, useState} from 'react';
import {GuestGuard} from '../../components/guest-guard/GuestGuard';
import {configContext, useSignInWithUsernameAndPassword} from '@imagine-cms/web';

export function LoginScreen() {
  const {config} = useContext(configContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {tryLogin} = useSignInWithUsernameAndPassword(username, password);

  const isDisabled = username === '' && password === ''

  const onLogin = async (event: SyntheticEvent) => {
    event.preventDefault();
    if (!username || !password) {
      toast.error('You must provide a username and password');
    }
    tryLogin();
  }

  return (
    <GuestGuard redirect>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="content-box">
              <div className="login-footer">
                <div className="logo" />
                <div className="username-position">
                  <label htmlFor="username">Username:</label>
                  <input type="text" name="username" id="username" />
                </div>
                <div className="password-position">
                  <label htmlFor="password">Password:</label>
                  <input type="text" name="password" id="password" />
                </div>

                <div className="button-position">
                  <button>Login</button>
                </div>
              </div>
              <div className="welcome-message">
                <h2>Welcome to {config!.siteName},</h2>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                  labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                  et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                  dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
                  rebum. Stet clita kasd
                </p>
              </div>

              <div className="onlineBubble">
                <b>0</b>
                users online
              </div>

              <a href="register.php" className="register-button">
                <span className="big_text">Kostenlos</span>
                <span className="small_text">mitmachen</span>
              </a>
              <div className="image" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="info-box">
              <div className="image" style={{backgroundImage: 'url(/img/frontpage/habbo_credits.png)' }} />
              <div className="desc">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="info-box">
              <div className="image" style={{backgroundImage: 'url(/img/frontpage/build_room.png)' }} />
              <div className="desc">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="info-box">
              <div className="image" style={{backgroundImage: 'url(/img/frontpage/play_events.png)' }} />
              <div className="desc">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
              </div>
            </div>
          </div>
        </div>
      </div>
    </GuestGuard>
  )
}
