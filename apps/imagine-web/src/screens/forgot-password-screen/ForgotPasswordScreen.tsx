import { useLocation } from 'wouter';
import { toast } from 'react-toastify';
import { Card } from '../../components/card/Card';
import { Form } from '../../components/form/Form';
import { Input } from '../../components/input/Input';
import React, { SyntheticEvent, useState } from 'react';
import { ButtonPrimary } from '../../components/button/Button.remix';
import { useForgotPasswordRequestCreate } from '@imagine-cms/client';

export function ForgotPasswordScreen() {
  const [, setLocation] = useLocation();
  const [emailAddress, setEmailAddress] = useState('');
  const forgotPasswordRequestCreate = useForgotPasswordRequestCreate();

  const isDisabled = !emailAddress;

  const onSubmitPasswordReset = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      await forgotPasswordRequestCreate.execute({ emailAddress });
      toast.success('Check your email for instructions on how to reset your password!');
      setLocation('/forgot-password/confirmation');
    } catch (e: any) {
      console.log(e);
      toast.error('There was a problem resetting your password');
    }
  }

  return (
    <Card header="Forgot Password?">
      <Form disabled={isDisabled} onSubmit={onSubmitPasswordReset}>
        <label>Email Address</label>
        <Input type="email" value={emailAddress} onChange={e => setEmailAddress(e.currentTarget.value ?? '')} />
        <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-end' }}>
          <ButtonPrimary disabled={isDisabled} type="submit">Send Reset Link</ButtonPrimary>
        </div>
      </Form>
    </Card>
  )
}