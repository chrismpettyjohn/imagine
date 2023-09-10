import { Link } from 'wouter';
import { toast } from 'react-toastify';
import { Card } from '../../blocks/card/Card';
import { Form } from '../../blocks/form/Form';
import { Input } from '../../blocks/input/Input';
import { Button } from '../../blocks/button/Button';
import React, { SyntheticEvent, useState } from 'react';
import { ButtonPrimary } from '../../blocks/button/Button.remix';
import { useSignInWithUsernameAndPassword } from '../../hooks/sign-in-with-username-and-password.hook';

export function SignInScreen() {
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
    <>
      <Card header="Login">
        <Form onSubmit={onLogin}>
          <Input type="text" name="username" className="form-control" id="username" placeholder="Username" autoComplete="current-username" required value={username} onChange={(e: any) => setUsername(e?.currentTarget?.value ?? '')} />
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
      <Card header="Security Notice">
        <p>This area is restricted and only authorized for members of our staff team.</p>
      </Card>
    </>
  )
}