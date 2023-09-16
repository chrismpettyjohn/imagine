import { Link } from 'wouter';
import { toast } from 'react-toastify';
import { Form } from '../../components/form/Form';
import { Card } from '../../components/card/Card';
import { Input } from '../../components/input/Input';
import React, { SyntheticEvent, useState } from 'react';
import { Button } from '../../components/button/Button';
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
      <Card header="Login">
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
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 16 }}>
        <DiscordLoginButton />
        <FacebookLoginButton />
        <GoogleLoginButton />
      </div>
    </GuestGuard>
  )
}
