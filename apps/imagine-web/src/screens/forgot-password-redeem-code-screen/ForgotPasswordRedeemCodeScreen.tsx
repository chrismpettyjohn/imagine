import { toast } from 'react-toastify';
import { useLocation, useRoute } from 'wouter';
import { Form } from '../../components/form/Form';
import { Input } from '../../components/input/Input';
import React, { SyntheticEvent, useState } from 'react';
import { ButtonBrand } from '../../components/button/Button.remix';
import { useForgotPasswordRequestRedeem } from '@imagine-cms/client';
import { GuestContainer } from '../../components/guest-container/GuestContainer';

export function ForgotPasswordRedeemCodeScreen() {
  const [, setLocation] = useLocation();
  const [newPassword, setNewPassword] = useState('');
  const [, params] = useRoute<{ requestCode: string }>('/forgot-password/redeem/:requestCode');
  const requestCode = params!.requestCode;

  const forgotPasswordRequestRedeem = useForgotPasswordRequestRedeem();

  const onConfirmPasswordChange = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      await forgotPasswordRequestRedeem.execute({ requestCode, newPassword });
      toast.success('Your password has been updated successfully');
      setLocation('/login');
    } catch {
      toast.error('There was a problem changing your password');
    }
  }
  return (
    <GuestContainer>
      <h1>Forgot Password</h1>
      <Form onSubmit={onConfirmPasswordChange}>
        <label>New Password</label>
        <Input type="password" value={newPassword} onChange={e => setNewPassword(e.currentTarget.value ?? '')} />
        <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-end' }}>
          <ButtonBrand>Change Password</ButtonBrand>
        </div>
      </Form>
    </GuestContainer>
  )
}