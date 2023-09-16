import { toast } from 'react-toastify';
import { useLocation, useRoute } from 'wouter';
import { Card } from '../../components/card/Card';
import { Form } from '../../components/form/Form';
import { Input } from '../../components/input/Input';
import React, { SyntheticEvent, useState } from 'react';
import { ButtonPrimary } from '../../components/button/Button.remix';
import { useForgotPasswordRequestRedeem } from '@imagine-cms/client';

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
    <Card header="Forgot Password?">
      <Form onSubmit={onConfirmPasswordChange}>
        <label>New Password</label>
        <Input type="password" value={newPassword} onChange={e => setNewPassword(e.currentTarget.value ?? '')} />
        <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-end' }}>
          <ButtonPrimary>Change Password</ButtonPrimary>
        </div>
      </Form>
    </Card>
  )
}