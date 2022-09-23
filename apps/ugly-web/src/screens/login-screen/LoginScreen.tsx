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
      <div className="login-page">
        <div className="hero">
          <div className="hotel"></div>
        </div>

        <div id="header-content" style={{background: 'white'}}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="logo"></div>
                <div className="online-count"><b>0</b> users online</div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="login-position">
                <h2>Sign In</h2>
                <form onSubmit={onLogin}>
                  <label htmlFor="login-username">Username</label>
                  <input type="text" name="login-username" id="login-username" value={username} onChange={e => setUsername(e?.target?.value ?? '')} />
                  <label htmlFor="login-password">Password</label>
                  <input type="password" name="login-password" id="login-password" value={password} onChange={e => setPassword(e?.target?.value ?? '')} />
                  <button className="btn big green login-button" type="submit" disabled={isDisabled}>Login</button>
                </form>
                <div className="clear"></div>
                <div className="row">
                  <div className="col-md-12">
                    <p>or</p>
                  </div>
                  <div className="col-md-12">
                    <Link to="/register" className="btn big orange register-button">Register for free</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </GuestGuard>
  )
}
