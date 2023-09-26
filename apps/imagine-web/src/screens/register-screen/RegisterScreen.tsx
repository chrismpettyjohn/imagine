import { Link } from 'wouter';
import { Grid } from '../../components/grid/Grid';
import { Card } from '../../components/card/Card';
import { Form } from '../../components/form/Form';
import { Input } from '../../components/input/Input';
import { Button } from '../../components/button/Button';
import { ButtonPrimary } from '../../components/button/Button.remix';
import { GuestGuard } from '../../components/guest-guard/GuestGuard';
import React, { SyntheticEvent, useContext, useEffect, useState } from 'react';
import { GoogleLoginButton } from '../../components/google-login-button/GoogleLoginButton';
import { DiscordLoginButton } from '../../components/discord-login-button/DiscordLoginButton';
import { FacebookLoginButton } from '../../components/facebook-login-button/FacebookLoginButton';
import { configContext, useSignInWithUsernameAndPassword, useUserCreateMutation } from '@imagine-cms/web';

export function RegisterScreen() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [betaCode, setBetaCode] = useState('');
  const { config } = useContext(configContext);
  const [passwordAgain, setPasswordAgain] = useState('');
  const createUser = useUserCreateMutation(username, email, password, betaCode);
  const { tryLogin } = useSignInWithUsernameAndPassword(username, password);

  // When user is created, attempt to login
  useEffect(() => {
    if (createUser?.data?.userCreate?.id) {
      tryLogin();
    }
  }, [createUser?.data?.userCreate?.id]);

  const betaCodeRequiredAndIsMissing = config?.betaCodesRequired ? !betaCode : false;

  const isLoading = createUser.loading;

  const canCreateUser = email !== '' && username !== '' && password !== '' && passwordAgain === password && betaCodeRequiredAndIsMissing && !isLoading;

  const onCreateUser = (event: SyntheticEvent) => {
    event.preventDefault();
    if (!canCreateUser) {
      return;
    }
    createUser.runMutation();
  }

  return (
    <GuestGuard>
      <img src="https://pbs.twimg.com/media/DjcTjDmXgAArv6j.jpg:large" style={{ height: 250, width: '100%', objectFit: 'cover', borderRadius: 8 }} />
      <br /><br />
      <Grid>
        <Card header="Register">
          <Form onSubmit={onCreateUser}>
            <label htmlFor="username">Username</label>
            <Input type="text" name="username" value={username} onChange={e => setUsername(e?.currentTarget?.value ?? '')} id="username" placeholder="Username" />
            <label htmlFor="email">Email</label>
            <Input type="text" name="email" value={email} onChange={e => setEmail(e?.currentTarget?.value ?? '')} id="email" placeholder="Email" />
            <label htmlFor="password">Password</label>
            <Input type="password" name="password" value={password} onChange={e => setPassword(e?.currentTarget?.value ?? '')} placeholder="Password" id="password" />
            <label htmlFor="password-confirmation">Confirm Password</label>
            <Input type="password" name="password_confirmation" value={passwordAgain} onChange={e => setPasswordAgain(e?.currentTarget?.value ?? '')} id="password-confirmation" placeholder="Password again" />
            {
              config?.betaCodesRequired && (
                <>

                  <label htmlFor="username">Beta Code</label>
                  <Input type="text" name="betaCode" value={betaCode} onChange={e => setBetaCode(e?.currentTarget?.value ?? '')} id="betaCode" placeholder="Beta Code" />
                </>
              )
            }
            <div style={{ display: 'flex', flex: 1, gap: 16, justifyContent: 'flex-end' }}>
              <Link to="/login">
                <ButtonPrimary>Login</ButtonPrimary>
              </Link>
              <Button className="btn btn-primary btn-block" disabled={!canCreateUser} type="submit">Join now</Button>
            </div>
          </Form>
        </Card>
        <Card header="Connect with Social Media">
          <DiscordLoginButton />
          <FacebookLoginButton />
          <GoogleLoginButton />
          <Link to="/login/device">
            <ButtonPrimary>
              <i className="fa fa-phone" /> Device
            </ButtonPrimary>
          </Link>
        </Card>
      </Grid>
    </GuestGuard>
  )
}
