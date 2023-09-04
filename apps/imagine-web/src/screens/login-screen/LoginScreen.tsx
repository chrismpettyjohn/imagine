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
import { DiscordLoginButton } from '../../components/discord-login-button/DiscordLoginButton';
import { UsernameWithAvatarInput } from './username-with-avatar-input/UsernameWithAvatarInput';

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
          <UsernameWithAvatarInput username={username} onChange={setUsername} />
          <label htmlFor="password">Password</label>
          <Input type="password" name="password" className="form-control" id="password" placeholder="Password" autoComplete="current-password" required value={password} onChange={(e: any) => setPassword(e?.currentTarget?.value ?? '')} />
          <div style={{ display: 'flex', flex: 1, gap: 16, justifyContent: 'flex-end' }}>
            <Link to="/register">
              <ButtonPrimary type="button">Create Account</ButtonPrimary>
            </Link>
            <Button type="submit">Login</Button>
          </div>
        </Form>
      </Card>
      <br />
      <DiscordLoginButton />
    </GuestGuard>
  )
}
