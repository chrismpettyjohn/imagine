import gql from 'graphql-tag';
import React, {SyntheticEvent, useState} from 'react';
import {useRunMutation} from '../../graphql/run-mutation';
import {GuestGuard} from '../../components/guest-guard/GuestGuard';
import {LoadingOverlay} from '../../components/loading-overlay/LoadingOverlay';

const CREATE_NEW_USER = gql`
  mutation($username: String!, $email: String!, $password: String!) {
      userCreate(newUser: {
          email: $email
          username: $username
          password: $password
      }), { id }
  }
`

export function RegisterScreen() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');
  const createUser = useRunMutation<{ user: { id: number } }>(CREATE_NEW_USER, { username, password, email });

  const canCreateUser = email !== '' && username !== '' && password !== '' && passwordAgain === password;

  const isLoading = createUser.loading;

  const onCreateUser = (event?: SyntheticEvent) => {
    event?.preventDefault();
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
                      <input type="text" name="username" value="" className="form-control" id="username"
                             placeholder="Username"
                             data-parsley-required-message="Please enter the username you would like!" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input type="text" name="email" value="" className="form-control" id="email" placeholder="Email"
                             data-parsley-required-message="Please enter your email address!" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input type="password" name="password" className="form-control" placeholder="Password" id="password"
                             data-parsley-required-message="Please enter a password!" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password-confirmation">Confirm Password</label>
                      <input type="password" name="password_confirmation" className="form-control"
                             id="password-confirmation" placeholder="Password again"
                             data-parsley-required-message="Re-type your chosen password!" required />
                    </div>
                    <div className="form-group mb-0">
                      <button className="btn btn-primary btn-block" type="submit">Join now</button>
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
