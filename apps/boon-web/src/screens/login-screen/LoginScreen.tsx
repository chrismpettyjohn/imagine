import {toast} from 'react-toastify';
import {configContext} from '../../context/config/ConfigContext';
import React, {SyntheticEvent, useContext, useState} from 'react';
import {GuestGuard} from '../../components/guest-guard/GuestGuard';
import {LatestArticleCard} from '../../components/latest-article-card/LatestArticleCard';
import {UsernameWithAvatarInput} from './username-with-avatar-input/UsernameWithAvatarInput';
import {useSignInWithUsernameAndPassword} from '../../hooks/sign-in-with-username-and-password.hook';

export function LoginScreen() {
  const {config} = useContext(configContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {tryLogin} = useSignInWithUsernameAndPassword(username, password);

  const onLogin = async (event?: SyntheticEvent) => {
    event?.preventDefault();
    if (!username || !password) {
      toast.error('You must provide a username and password');
    }
    tryLogin();
  }

  return (
    <GuestGuard redirect>
      <main className="position-relative container justify-content-center py-4">
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
