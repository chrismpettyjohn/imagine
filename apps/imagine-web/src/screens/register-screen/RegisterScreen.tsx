import { Link } from 'wouter';
import { Card } from '../../components/card/Card';
import { Form } from '../../components/form/Form';
import { Input } from '../../components/input/Input';
import { Button } from '../../components/button/Button';
import React, { SyntheticEvent, useEffect, useState } from 'react';
import { ButtonPrimary } from '../../components/button/Button.remix';
import { GuestGuard } from '../../components/guest-guard/GuestGuard';
import { useSignInWithUsernameAndPassword, useUserCreateMutation } from '@imagine-cms/web';

export function RegisterScreen() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');
  const createUser = useUserCreateMutation(username, email, password);
  const { tryLogin } = useSignInWithUsernameAndPassword(username, password);

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
          <div style={{ display: 'flex', flex: 1, gap: 16, justifyContent: 'flex-end' }}>
            <Link to="/login">
              <ButtonPrimary>Login</ButtonPrimary>
            </Link>
            <Button className="btn btn-primary btn-block" disabled={!canCreateUser} type="submit">Join now</Button>
          </div>
        </Form>
      </Card>
    </GuestGuard>
  )
}
