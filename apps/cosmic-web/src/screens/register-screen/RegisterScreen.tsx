import {UserGender} from '@imagine-cms/types';
import {LookSelector} from './look-selector/LookSelector';
import React, {SyntheticEvent, useEffect, useState} from 'react';
import {GuestGuard} from '../../components/guest-guard/GuestGuard';
import {LoadingOverlay} from '../../components/loading-overlay/LoadingOverlay';
import {useSignInWithUsernameAndPassword, useUserCreateMutation} from '@imagine-cms/web';

export function RegisterScreen() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');
  const [gender, setGender] = useState<UserGender>(UserGender.Male);
  const [look, setLook] = useState('');
  const createUser = useUserCreateMutation(username, email, password, gender, look);
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
      <div className="registerComponent">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="card">
              <div className="card-header">
                <div className="card-header-title-container d-flex">
                  <div className="card-header-titles">
                    <div className="card-header-title">Registration page</div>
                    <span className="card-header-subtitle">Create your account</span></div>
                  </div>
              </div>
              </div>
          </div>
        </div>
        <div className="row justify-content-md-center mt-4">
          <div className="col-md-5">
            <LoadingOverlay loading={isLoading}>
              <form onSubmit={onCreateUser}>
                <div className="row">
                  <div className="col-md-12">
                    <div className="card">
                      <div className="card-header">
                        <div className="card-header-title-container d-flex">
                          <div className="background-gray card-header-icon-container">
                            <div className="icon icon-box-one"/>
                          </div>
                          <div className="card-header-titles">
                            <div className="card-header-title">Create your account</div>
                            <span className="card-header-subtitle">Choose your fancy account name</span></div>
                        </div>
                      </div>

                      <div className="card-body">
                        <input className="form-control mb-3" type="text" placeholder="Username" autoComplete="on" value={username} onChange={e => setUsername(e.target.value ?? '')} />
                        <input className="form-control mb-3" type="email" placeholder="Email Address" autoComplete="on" value={email} onChange={e => setEmail(e.target.value ?? '')} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-md-12">
                    <div className="card">
                      <div className="card-header">
                        <div className="card-header-title-container d-flex">
                          <div className="background-gray card-header-icon-container">
                            <div className="icon icon-box-two"/>
                          </div>
                          <div className="card-header-titles">
                            <div className="card-header-title">Create a strong password</div>
                            <span className="card-header-subtitle">We all want that your account is safe!</span></div>
                        </div>
                      </div>
                      <div className="card-body">
                        <input className="form-control mb-3" type="password" placeholder="Password" autoComplete="on" value={password} onChange={e => setPassword(e.target.value ?? '')} />
                        <input className="form-control mb-3" type="password" placeholder="Password Again" autoComplete="on" value={passwordAgain} onChange={e => setPasswordAgain(e.target.value ?? '')} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-md-12">
                    <LookSelector gender={gender} onChangeGender={newGender => setGender(newGender)} look={look} onChangeLook={newLook => setLook(newLook)} />
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-md-12">
                    <button className="btn btn-success w-100" type="submit">Go inside!</button>
                  </div>
                </div>
              </form>
            </LoadingOverlay>
          </div>
          <div className="col-md-5">
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <div className="card-header-title-container d-flex">
                      <div className="card-header-titles">
                        <div className="card-header-title">What can you expect?</div>
                        <span className="card-header-subtitle">Another game based around designing rooms</span></div>
                      </div>
                  </div>

                  <div className="card-body">
                    <div style={{float: 'left'}}><img src="https://images.habbo.com/c_images/HabboWay/habboway_2a.png" />
                    </div>
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
