import './RegisterScreen.css';
import {useLocation} from 'wouter';
import {UserGender} from '@imagine-cms/types';
import {GenderSelector} from './gender-selector/GenderSelector';
import React, {SyntheticEvent, useEffect, useState} from 'react';
import {GuestGuard} from '../../components/guest-guard/GuestGuard';
import {BirthdaySelector} from './birthday-selector/BirthdaySelector';
import {LoadingOverlay} from '../../components/loading-overlay/LoadingOverlay';
import {InteractiveWizard} from '../../components/interactive-wizard/InteractiveWizard';
import {useSignInWithUsernameAndPassword, useUserCreateMutation} from '@imagine-cms/web';
import {InteractiveWizardStep} from '../../components/interactive-wizard/InteractiveWizard.types';
import {UsernameInput} from './username-input/UsernameInput';
import {EmailInput} from './email-input/EmailInput';

export function RegisterScreen() {
  const [location, setLocation] = useLocation();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState<UserGender>();
  const [birthday, setBirthday] = useState<Date>();
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

  const onCreateUser = () => {
    if (!canCreateUser || createUser.loading) {
      return;
    }
    createUser.runMutation();
  }

  const REGISTER_STEPS: InteractiveWizardStep[] = [
    {
      label: 'Gender and Date of Birth',
      view: (
        <>
          <GenderSelector gender={gender} onChange={setGender} />
          <BirthdaySelector birthday={birthday} onChange={setBirthday} />
        </>
      ),
      isComplete: () => gender !== undefined && birthday !== undefined,
    },
    {
      label: 'Username and Email Address',
      view: (
        <>
          <UsernameInput username={username} onChange={setUsername} />
          <EmailInput email={email} onChange={setEmail} />
        </>
      ),
      isComplete: () => username !== '' && email !== '',
    },
    {
      label: 'Change your Password',
      view: (
        <>
          <div className="row">
            <div className="col-12">
              <label>Password</label>
              <input type="password" value={password} onChange={e => setPassword(e.target.value ?? '')} />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <label>Password Again</label>
              <input type="password" value={passwordAgain} onChange={e => setPasswordAgain(e.target.value ?? '')} />
            </div>
          </div>
        </>
      ),
      isComplete: () => password !== '' && password === passwordAgain
    }
  ]

  return (
    <GuestGuard redirect>
      <div className="main" style={{marginTop: 100}}>
        <div className="logo" />
        <LoadingOverlay loading={isLoading}>
          <InteractiveWizard steps={REGISTER_STEPS} onQuit={() => setLocation('/me')} onFinish={onCreateUser} />
        </LoadingOverlay>
      </div>
    </GuestGuard>
  )
}
