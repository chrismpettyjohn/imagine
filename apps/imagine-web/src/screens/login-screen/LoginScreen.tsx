import { Link } from 'wouter';
import { toast } from 'react-toastify';
import { Form } from '../../components/form/Form';
import { Card } from '../../components/card/Card';
import { Input } from '../../components/input/Input';
import React, { SyntheticEvent, useState } from 'react';
import { Button } from '../../components/button/Button';
import { GridLarge } from '../../components/grid/Grid.remix';
import { useSignInWithUsernameAndPassword } from '@imagine-cms/web';
import { ButtonPrimary } from '../../components/button/Button.remix';
import { GuestGuard } from '../../components/guest-guard/GuestGuard';
import { GoogleLoginButton } from '../../components/google-login-button/GoogleLoginButton';
import { DiscordLoginButton } from '../../components/discord-login-button/DiscordLoginButton';
import { FacebookLoginButton } from '../../components/facebook-login-button/FacebookLoginButton';

export function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { tryLogin } = useSignInWithUsernameAndPassword(username, password);

  const onLogin = async (event: SyntheticEvent) => {
    event.preventDefault();
    if (!username || !password) {
      toast.error('You must provide a username and password');
    }
    tryLogin();
  }

  return (
    <GuestGuard redirect>
      <img src="https://pbs.twimg.com/media/DjcTjDmXgAArv6j.jpg:large" style={{ height: 250, width: '100%', objectFit: 'cover', borderRadius: 8 }} />
      <br /><br />
      <GridLarge>
        <Card header="Already have an account?">
          <Form onSubmit={onLogin}>
            <label>Username</label>
            <Input type="text" name="username" placeholder="Username" value={username} onChange={e => setUsername(e.currentTarget.value ?? '')} />
            <label>Password</label>
            <Input type="password" name="password" placeholder="Password" required value={password} onChange={(e: any) => setPassword(e?.currentTarget?.value ?? '')} />
            <div style={{ display: 'flex', flex: 1, gap: 16, justifyContent: 'space-between', alignItems: 'center' }}>
              <Link to="/forgot-password">
                Forgot Password?
              </Link>
              <div style={{ display: 'flex', flex: 1, gap: 16, justifyContent: 'flex-end' }}>
                <Link to="/register">
                  <ButtonPrimary type="button">Create Account</ButtonPrimary>
                </Link>
                <Button type="submit">Login</Button>
              </div>
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
      </GridLarge>
    </GuestGuard>
  )
}
