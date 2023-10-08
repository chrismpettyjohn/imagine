import { useLocation } from 'wouter';
import { toast } from 'react-toastify';
import { Form } from '../../components/form/Form';
import { Input } from '../../components/input/Input';
import React, { SyntheticEvent, useState } from 'react';
import { ButtonBrand } from '../../components/button/Button.remix';
import { useForgotPasswordRequestCreate } from '@imagine-cms/client';
import { GuestContainer } from '../../components/guest-container/GuestContainer';

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
      toast.error('There was a problem resetting your password');
    }
  }

  return (
    <GuestContainer>
      <h1>Forgot Password</h1>
      <Form disabled={isDisabled} onSubmit={onSubmitPasswordReset}>
        <label>Email Address</label>
        <Input type="email" value={emailAddress} onChange={e => setEmailAddress(e.currentTarget.value ?? '')} />
        <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-end' }}>
          <ButtonBrand disabled={isDisabled} type="submit">Send Reset Link</ButtonBrand>
        </div>
      </Form>
    </GuestContainer>
  )
}