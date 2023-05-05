import React, {SyntheticEvent, useEffect, useState} from 'react';
import {GuestGuard} from '../../components/guest-guard/GuestGuard';
import {LoadingOverlay} from '../../components/loading-overlay/LoadingOverlay';
import {useSignInWithUsernameAndPassword, useUserCreateMutation} from '@imagine-cms/web';

export function RegisterScreen() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');
  const createUser = useUserCreateMutation(username, email, password);
  const {tryLogin} = useSignInWithUsernameAndPassword(username, password);

  // When user is created, attempt to login
  useEffect(() => {
    if (createUser?.data?.userCreate?.id) {
      tryLogin();
    }
  }, [createUser?.data?.userCreate?.id]);

  const canCreateUser = email !== '' && username !== '' && password !== '' && passwordAgain === password;

  const isLoading = createUser.loading;

  const onCreateUser = (event: SyntheticEvent) => {
    event.preventDefault();
    if (!canCreateUser || createUser.loading) {
      return;
    }
    createUser.runMutation();
  }

  return (
    <GuestGuard>
      <main className="position-relative container justify-content-center py-4">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-12">
            <div className="card">
              <div className="card-body">
                <h5 className="silver">Register</h5>
                <LoadingOverlay loading={isLoading}>
                  <form className="form" onSubmit={onCreateUser}>
                    <div className="form-group">
                      <label htmlFor="username">Username</label>
                      <input type="text" name="username" value={username} onChange={e => setUsername(e?.currentTarget?.value ?? '')} className="form-control" id="username" placeholder="Username" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input type="text" name="email" value={email} onChange={e => setEmail(e?.currentTarget?.value ?? '')} className="form-control" id="email" placeholder="Email" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input type="password" name="password" value={password} onChange={e => setPassword(e?.currentTarget?.value ?? '')} className="form-control" placeholder="Password" id="password" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password-confirmation">Confirm Password</label>
                      <input type="password" name="password_confirmation" value={passwordAgain} onChange={e => setPasswordAgain(e?.currentTarget?.value ?? '')} className="form-control" id="password-confirmation" placeholder="Password again"  />
                    </div>
                    <div className="form-group mb-0">
                      <button className="btn btn-primary btn-block" disabled={!canCreateUser} type="submit">Join now</button>
                    </div>
                  </form>
                </LoadingOverlay>
              </div>
            </div>
          </div>
        </div>
      </main>
    </GuestGuard>
  )
}
