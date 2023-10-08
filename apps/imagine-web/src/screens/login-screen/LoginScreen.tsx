import { Link } from 'wouter';
import { toast } from 'react-toastify';
import { Form } from '../../components/form/Form';
import { Input } from '../../components/input/Input';
import React, { SyntheticEvent, useState } from 'react';
import { Button } from '../../components/button/Button';
import { useSignInWithUsernameAndPassword } from '@imagine-cms/web';
import { ButtonBrand } from '../../components/button/Button.remix';
import { GuestContainer } from '../../components/guest-container/GuestContainer';

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
    <GuestContainer>
      <div>
        <h1>welcome among us</h1>
        <h4>It's time to give way to your imagination to create your most beautiful apartments</h4>
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
                <ButtonBrand type="button">Create Account</ButtonBrand>
              </Link>
              <Button type="submit">Login</Button>
            </div>
          </div>
        </Form>
      </div>
    </GuestContainer>
  )
}
